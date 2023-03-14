import React from "react";

function Result({ correct, questions }) {
  return (
    <div className="result">
      <img
        alt="result"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Siz {questions.length}-ta savoldan {correct}-tasiga to'gri javob
        berdingiz
      </h2>
      <a href="/">
        <button>Qayta urinib ko'rish ⏎</button>
      </a>
    </div>
  );
}

export default Result;
