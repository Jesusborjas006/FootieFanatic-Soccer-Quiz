import { useEffect, useReducer } from "react";
import Heading from "../components/Heading";
import Progress from "../components/Progress";
import Question from "../components/Question";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
};

const reducer = (state, actions) => {
  if (actions.type === "dataRecieved") {
    return { ...state, questions: actions.payload, status: "ready" };
  } else if (actions.type === "dataFailed") {
    return { ...state, status: "error" };
  } else if (actions.type === "notReady") {
    return { ...state, status: "loading" };
  } else if (actions.type === "incrementIndex") {
    return { ...state, index: state.index + 1 };
  }
};

const QuestionPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;

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
    <div className="">
      <Heading />
      <Progress index={index} />
      <Question
        questions={questions}
        status={status}
        index={index}
        dispatch={dispatch}
      />
    </div>
  );
};

export default QuestionPage;
