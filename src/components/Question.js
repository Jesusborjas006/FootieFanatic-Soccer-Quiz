import { useEffect, useReducer } from "react";
import Options from "./Options";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, actions) => {
  if (actions.type === "dataRecieved") {
    return { ...state, questions: actions.payload, status: "ready" };
  } else if (actions.type === "notReady") {
    return { ...state, status: "loading" };
  }
};

const Question = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  console.log(questions);

  useEffect(() => {
    dispatch({ type: "notReady" });
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:3030/questions");
      const data = await response.json();
      dispatch({ type: "dataRecieved", payload: data });
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      {status === "ready" && (
        <h3 className="text-center mt-10">{questions[0]?.question}</h3>
      )}

      {/* <Options options={questions[0].options} /> */}
    </div>
  );
};

export default Question;
