import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="container p-10">
      <h1 className="text-center text-2xl md:text-3xl">
        Best of Luck for This Amazing Project
      </h1>
      <div className="flex justify-center mt-[100px]">
        <img
          src={reactLogo}
          className="h-[80px] md:h-[120px] animate-bounce"
        ></img>
      </div>
    </div>
  );
}

export default App;
