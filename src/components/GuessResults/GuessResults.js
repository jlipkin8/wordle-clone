import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { range } from "../../utils";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <Guess key={index} word={guessList[index]?.checked_word}></Guess>
        );
      })}
    </div>
  );
}

export default GuessResults;
