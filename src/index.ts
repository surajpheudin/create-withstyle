import path from "node:path";
import fs from "node:fs";
import inquirer, { QuestionCollection } from "inquirer";
import * as url from "url";
import { Framework } from "./interface";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const FRAMEWORKS: Framework[] = [
  "angular",
  "react",
  "svelte",
  "vanilla",
  "vue",
];

const questions: QuestionCollection = [
  {
    type: "input",
    name: "projectName",
    message: "Project Name: ",
    validate(input: string) {
      if (!/^[a-zA-Z\-]+$/.test(input)) {
        throw Error(
          "Name must be only lowercase letters, or dashes. (You may apply changes to the same line above.)"
        );
      } else if (fs.existsSync(input)) {
        throw Error(
          "Project name already exist. (You may apply changes to same the line above.)"
        );
      }

      return true;
    },
    filter(val: string) {
      return val.toLowerCase();
    },
  },
  {
    type: "list",
    name: "framework",
    message: "Select a framework: ",
    choices: FRAMEWORKS.map((each) => capitalize(each)),
    filter(val: string) {
      return val.toLowerCase();
    },
  },
];

const init = async () => {
  console.log();

  const { projectName, framework } = await inquirer.prompt(questions);

  const styleQuestion: QuestionCollection = [
    {
      type: "list",
      name: "style",
      message: "Select a variant: ",
      choices: getStyleChoice(framework),
      filter(val: string) {
        return val.toLowerCase();
      },
    },
  ];

  const { style } = await inquirer.prompt(styleQuestion);

  const targetDir = projectName as string;
  const templateDir = path.resolve(
    __dirname,
    `../templates/${framework}/${style}/`
  );

  fs.mkdirSync(targetDir);

  const files = fs.readdirSync(templateDir);
  files.forEach((file) => {
    if (file === "package.json") {
      const pkg = JSON.parse(
        fs.readFileSync(path.join(templateDir, file), "utf-8")
      );

      pkg.name = projectName;

      fs.writeFileSync(
        path.join(targetDir, file),
        JSON.stringify(pkg, null, 2)
      );
    }

    const src = path.join(templateDir, file);
    const dest = path.join(targetDir, file);
    write(src, dest);
  });

  const pkg = getPackageDetails(process.env.npm_config_user_agent || "");

  console.log(`\nNow run:\n`);
  console.log(`  cd ${projectName}`);

  switch (pkg.name) {
    case "yarn":
      console.log(`  yarn`);
      console.log(`  yarn dev`);
      break;

    case "pnpm":
      console.log(`  pnpm install`);
      console.log(`  pnpm dev`);
      break;

    default:
      console.log(`  npm install`);
      console.log(`  npm run dev`);
      break;
  }

  console.log();
};

init().catch((e) => console.log(e));

function write(src: string, dest: string) {
  const stat = fs.statSync(src);

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });

    fs.readdirSync(src).forEach((file) => {
      const srcFile = path.resolve(src, file);
      const destFile = path.resolve(dest, file);
      write(srcFile, destFile);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function getPackageDetails(data: string) {
  const [name, version] = data.split("/");
  return {
    name,
    version,
  };
}

function getStyleChoice(framework: Framework) {
  console.log("framework", framework);

  let list: string[] = [];
  switch (framework) {
    case "angular":
      list = ["Angular-Material", "DevExtreme", "Ng-Bootstrap"];
      break;

    case "react":
      list = ["Tailwindcss", "Chakra-ui", "MUI"];
      break;

    case "svelte":
      list = ["Svelte-Material-UI", "SvelteStrap"];
      break;

    case "vanilla":
      list = ["Tailwindcss", "Bootstrap"];
      break;

    case "vue":
      list = ["BootstrapVue", "VueTailwind"];
      break;

    default:
      break;
  }

  return list;
}

function capitalize(sentence: string) {
  const words = sentence.split(" ");
  return words
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
}
