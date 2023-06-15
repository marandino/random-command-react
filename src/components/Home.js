import { useState } from "react";
import { abbaLyrics } from "../utils/wordbank";
import generateCommand from "../utils/generatorFunction";

function Home() {
  const [randomCommand, setRandomCommand] = useState(
    "Totally Randomized Command Generator"
  );

  const [lyricsIndex, setLyricsIndex] = useState(0);
  //TODO: make this more readable... I can´t find a variable name for this.
  const [hasRunOnce, setHasRunOnce] = useState(false);
  const [lyrics] = useState(abbaLyrics);

  const generateNewCommand = () => {
    // set the first run var in case it has not been.
    setRandomCommand(generateCommand());
    // refactor this into its own function.
    if (hasRunOnce) {
      setLyricsIndex(lyricsIndex === lyrics.length - 1 ? 0 : lyricsIndex + 1);
    }
    setHasRunOnce(true);
  };

  return (
    <>
      <h1>
        {hasRunOnce ? lyrics[lyricsIndex] : "Random Command"}
        <span className="underscore"></span>
      </h1>
      <h2 data-testid="randomCommand">{randomCommand}</h2>
      <button className="primary" onClick={generateNewCommand}>
        Generate
      </button>
    </>
  );
}

export default Home;
