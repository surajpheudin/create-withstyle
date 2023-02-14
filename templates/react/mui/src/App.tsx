import { Container, Box, Stack, Breakpoint, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import Title from "./components/common/Title/Title";
import { Button } from "./library/components";

function App() {
    return (
        <Container
            sx={{
                pb: 10,
            }}
        >
            <Title>Containers</Title>
            <Stack textAlign={"center"}>
                {containers.map((width) => (
                    <Container
                        key={width}
                        maxWidth={width}
                        sx={{
                            py: 12,
                            backgroundColor: "bg.blue.light",
                        }}
                    >
                        Container {width}
                    </Container>
                ))}
            </Stack>

            <Title>Text Sizes</Title>
            <Stack spacing={2}>
                {typographies.map((variant) => (
                    <Typography key={variant} variant={variant}>
                        {variant}
                    </Typography>
                ))}
            </Stack>

            <Title>Text Colors</Title>
            <Stack spacing={2}>
                {textColors.map((color) => (
                    <Typography
                        key={color}
                        sx={{
                            backgroundColor:
                                color === "white.main" ? "bg.gray.dark" : "",
                            color: "typography." + color,
                        }}
                    >
                        This is {color} text
                    </Typography>
                ))}
            </Stack>

            <Title>Background Colors</Title>
            <Stack
                spacing={2}
                sx={{
                    "& > div": {
                        p: 4,
                    },
                }}
            >
                {backgroundColors.map((bg) => (
                    <Box
                        key={bg}
                        sx={{
                            backgroundColor: bg,
                            color:
                                bg === "bg.gray.dark"
                                    ? "typography.white.main"
                                    : "",
                        }}
                    >
                        {bg}
                    </Box>
                ))}
            </Stack>

            <Title>Border Colors</Title>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 4,
                }}
            >
                {borderColors.map((color) => (
                    <Box
                        key={color}
                        sx={{
                            height: "100px",
                            width: "100px",
                            p: 2,
                            border: "2px solid transparent",
                            borderColor: color,
                        }}
                    ></Box>
                ))}
            </Box>

            <Title>Buttons</Title>
            <Stack spacing={4}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Typography variant="h2">Variants:</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Typography variant="h2">Disabled:</Typography>
                    <Button variant="contained" disabled>
                        Contained
                    </Button>
                    <Button variant="outlined" color="inherit" disabled>
                        Outline
                    </Button>
                    <Button variant="text" color="inherit" disabled>
                        Invisible
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Typography variant="h2">Colors:</Typography>
                    <Button color="primary">Primary</Button>
                    <Button color="secondary">Secondary</Button>
                    <Button color="info">Info</Button>
                    <Button color="error">Danger</Button>
                </Box>
                <Box
                    my={4}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Typography variant="h2">Sizes:</Typography>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained">Medium</Button>
                    <Button size="large" variant="outlined" color="inherit">
                        Large
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
}

export default App;

const containers: Breakpoint[] = ["xl", "lg", "md", "sm"];

const typographies: Variant[] = ["h1", "h2", "h3", "h4", "h5", "h6", "body1"];

const textColors = [
    "gray.light",
    "gray",
    "gray.dark",
    "white.main",
    "blue.main",
    "green.main",
    "yellow.main",
    "orange.main",
    "orange.light",
    "red.main",
    "pink.main",
    "purple.main",
];

const borderColors = [
    "border.white.main",
    "border.gray.light",
    "border.gray.main",
    "border.gray.dark",
    "border.blue.light",
    "border.blue.main",
    "border.green.main",
    "border.yellow.main",
    "border.red.main",
    "border.purple.main",
];

const backgroundColors = [
    "bg.gray.light",
    "bg.gray.main",
    "bg.gray.dark",
    "bg.blue.light",
    "bg.blue.main",
    "bg.green.light",
    "bg.green.main",
    "bg.yellow.light",
    "bg.yellow.main",
    "bg.yellow.dark",
    "bg.red.light",
    "bg.red.main",
    "bg.purple.light",
    "bg.purple.main",
];
