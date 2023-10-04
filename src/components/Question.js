import { useEffect, useReducer } from "react";
import Options from "./Options";
import Loading from "./Loading";
import Error from "./Error";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = (state, actions) => {
  if (actions.type === "dataRecieved") {
    return { ...state, questions: actions.payload, status: "ready" };
  } else if (actions.type === "dataFailed") {
    return { ...state, status: "error" };
  } else if (actions.type === "notReady") {
    return { ...state, status: "loading" };
  }
};

const Question = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  console.log("status: ", status);

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
      {status === "ready" && (
        <h3 className="text-center mt-10">{questions[0]?.question}</h3>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
    </div>
  );
};

export default Question;
