import React from "react";

function Banner({ won, numOfGuesses, answer }) {
  return (
    <>
      {won ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>
              {" "}
              {numOfGuesses} {numOfGuesses > 1 ? "guesses" : "guess"}
            </strong>
            .
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}
export default Banner;
