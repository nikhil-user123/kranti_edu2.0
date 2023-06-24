import React, { useEffect, useState } from "react";
import styles from "@/styles/QuizBox.module.css";

const QuizBox = (props) => {
  const questionArray = props.questionArray;
  const totalQues = questionArray.length;
  const [activeQuestionId, setActiveQuestionId] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(questionArray[0]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentScore, setCurrentScore] = useState(0);
  const [timer, setTimer] = useState(10);

  const quizSubmitHandler = () => {
    console.log(currentScore);
    setActiveQuestionId(0);
    setSelectedAnswer("");
    props.closer();
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const handleSubmit = () => {
    if (selectedAnswer === activeQuestion.answer) {
      console.log("correct Answer");
      setCurrentScore(prevScore => prevScore + 1);
      setCurrentScore(prevScore => prevScore + 0);
      console.log("Your current score is --> ", currentScore);
    } else {
      console.log("wrong ansewer");
    }
    if (activeQuestionId === questionArray.length) {
      console.log("Your total score is --> ", currentScore);
      props.closer();
    } else {
      const temp = activeQuestionId + 1;
      setActiveQuestionId(temp);
      setActiveQuestion(questionArray[activeQuestionId]);
      setSelectedAnswer("");
      setTimer(10);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      handleSubmit();
    }
  }, [timer]);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className={styles.quiz_wrap}>
      <div className={styles.quiz_wrap_navbar}>
        <div
          className={styles.quiz_timer}
        >{`Question ${activeQuestionId} of ${totalQues}`}</div>
        <div className={styles.quiz_timer}>{`Time left : ${timer} sec`}</div>
      </div>
      <hr />
      <p>
        <span>Question : </span>
        {activeQuestion.question}
      </p>
      <label
        className={(selectedAnswer === activeQuestion.op_one) ? styles.active_label : ""}
      >
        <input
          hidden
          type="radio"
          name="answer"
          value={activeQuestion.op_one}
          checked={selectedAnswer === activeQuestion.op_one}
          onChange={handleAnswerChange}
        />
        {"A. " + activeQuestion.op_one}
      </label>
      <label
        className={
          (selectedAnswer === activeQuestion.op_two) ? styles.active_label : ""
        }
      >
        <input
          hidden
          type="radio"
          name="answer"
          value={activeQuestion.op_two}
          checked={selectedAnswer === activeQuestion.op_two}
          onChange={handleAnswerChange}
        />
        {"B. " + activeQuestion.op_two}
      </label>
      <label
        className={
          (selectedAnswer === activeQuestion.op_three) ? styles.active_label : ""
        }
      >
        <input
          hidden
          type="radio"
          name="answer"
          value={activeQuestion.op_three}
          checked={selectedAnswer === activeQuestion.op_three}
          onChange={handleAnswerChange}
        />
        {"C. " + activeQuestion.op_three}
      </label>
      <label
        className={
          (selectedAnswer === activeQuestion.op_forth) ? styles.active_label : ""
        }
      >
        <input
          hidden
          type="radio"
          name="answer"
          value={activeQuestion.op_forth}
          checked={selectedAnswer === activeQuestion.op_forth}
          onChange={handleAnswerChange}
        />
        {"D. " + activeQuestion.op_forth}
      </label>
      <hr />
      <div className={styles.quiz_footer}>
        <div className={styles.next_ques_button} onClick={quizSubmitHandler}>
          Submit
        </div>
        <div className={styles.next_ques_button} onClick={handleSubmit}>
          Next Ques.
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
