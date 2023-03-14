import React, { useState } from "react";
import Game from "./components/game";
import Result from "./components/result";
import { questions } from "./mock/questions";

let randomQuestion = questions.sort((v) => Math.random(v) - 0.5);

const App = () => {
  const [step, setStep] = useState(0);
  const [corrects, setCorrect] = useState(0);
  const question = questions[step];
  // const [isRight, setIsRight] = useState(null);

  const sledushiy = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(corrects + 1);
      console.log(corrects);
    }
  };

  return (
    <div className="App"> 
      {step !== randomQuestion.length ? (
        <Game
          question={question}
          correct={corrects}
          sledushiy={sledushiy}
          questions={randomQuestion}
          step={step}
        />
      ) : (
        <Result correct={corrects} questions={randomQuestion} />
      )}
    </div>
  );
};

export default App;
