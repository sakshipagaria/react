import { useState } from 'react';
import './App.css';

function App() {
  const questions = [
    {
      questionText: "Q.1 What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Q.2 Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "Q.3 The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "Q.4 How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const[currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore , setShowScore] = useState(false)
  const [score,setScore] = useState(0);

  const handleClick =(isCorrect)=>{
    if (isCorrect){
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
    }
    else{
      setShowScore(true)
      /*alert("QUIZ IS COMPLETETD!!!!")*/
    }
  }

  return (
    <div className="App">
      {showScore ? (
        <>
          <h1>
            you have scored {score} out of {questions.length}
          </h1>
        </>
      ) : (
        <div>
          <h1>{questions[currentQuestion].questionText}</h1>

          <div className="answerButtonDiv">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
