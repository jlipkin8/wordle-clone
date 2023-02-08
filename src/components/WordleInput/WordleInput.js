import React from "react";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";

function WordleInput({ answer, guessList, setGuessList }) {
  const [word, setWord] = React.useState("");
  const numOfGuesses = guessList.length - 1;
  const [won, setWon] = React.useState(false);
  const endGame = numOfGuesses > 6 || won;

  const handleWord = (event) => {
    event.preventDefault();
    const newGuess = {
      id: crypto.randomUUID(),
      word,
      checked_word: checkGuess(word, answer),
    };
    setGuessList([...guessList, newGuess]);
    setWon(word === answer);
    setWord("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleWord}>
      <label htmlFor="guess-input">Enter guess:</label>
      {endGame ? (
        <Banner answer={answer} numOfGuesses={numOfGuesses} won={won} />
      ) : (
        <input
          id="guess-input"
          type="text"
          minLength="5"
          maxLength="5"
          value={word}
          onChange={(event) => {
            const newWord = event.target.value.toUpperCase();
            setWord(newWord);
          }}
        />
      )}
    </form>
  );
}

export default WordleInput;
