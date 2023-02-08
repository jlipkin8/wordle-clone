import React from "react";
import {range} from "../../utils";

const wordLength = 5

function Guess({word}) {
  return (
    <p className="guess">
      {
        range(wordLength).map((index) => {
          const className = word ? `cell ${word[index].status}` : "cell"
          const letter = word ? word[index].letter : ""
          return (
            <span key={index} className={className}>{letter}</span>
          )
        })
      }
    </p>
  );
}

export default Guess;
