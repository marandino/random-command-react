import { useState } from "react";
import "./App.css";
import generateCommand from "./utils/generatorFunction";

function App() {
  // create a function that generates the strings
  // var randomCommand = "Totally Randomized Command Generator";
  const [randomCommand, setRandomCommand] = useState(
    "Totally Randomized Command Generator"
  );
  const generateNewCommand = () => {
    setRandomCommand(generateCommand());
  };

  return (
    <div className="App">
      <nav>
        <ul className="navbar">
          <li>about</li>
          <li>contribute</li>
          <li>rules</li>
        </ul>
      </nav>
      <main>
        <h1>Random Command</h1>
        <h2 data-testid="randomCommand">{randomCommand}</h2>
        <button className="primary" onClick={generateNewCommand}>
          Generate
        </button>
      </main>
    </div>
  );
}

export default App;
