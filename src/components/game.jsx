import React from "react";

function Game({ question, step, questions, sledushiy, isRight }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((value, index) => (
          <li
            className={isRight && "green"}
            onClick={() => sledushiy(index)}
            key={value}
          >
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
