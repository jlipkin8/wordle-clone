import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(1, 1 + NUM_OF_GUESSES_ALLOWED).map((item) => {
        return <Guess key={item} word={guessList[item]?.checked_word}></Guess>;
      })}
    </div>
  );
}

export default GuessResults;
