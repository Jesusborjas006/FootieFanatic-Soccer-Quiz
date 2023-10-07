import { useEffect, useReducer } from "react";
import Heading from "../components/Heading";
import Question from "../components/Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  usersAnswer: null,
};

const reducer = (state, actions) => {
  if (actions.type === "dataRecieved") {
    return { ...state, questions: actions.payload, status: "ready" };
  } else if (actions.type === "dataFailed") {
    return { ...state, status: "error" };
  } else if (actions.type === "notReady") {
    return { ...state, status: "loading" };
  } else if (actions.type === "incrementIndex") {
    return { ...state, index: state.index + 1, usersAnswer: null };
  } else if (actions.type === "answered") {
    return { ...state, usersAnswer: actions.payload };
  }
};

const QuestionPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, usersAnswer } = state;

  console.log(usersAnswer);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch({ type: "notReady" });
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok) {
          dispatch({ type: "dataFailed", payload: "error" });
        }
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <Heading />
      <Question
        questions={questions}
        status={status}
        index={index}
        dispatch={dispatch}
        usersAnswer={usersAnswer}
      />
    </div>
  );
};

export default QuestionPage;
