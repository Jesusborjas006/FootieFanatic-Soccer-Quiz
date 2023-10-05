import { useEffect, useReducer } from "react";
import Options from "./Options";
import Loading from "./Loading";
import Error from "./Error";

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

const Question = () => {
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
    <div>
      {status === "ready" && (
        <>
          <h3 className="text-center my-10">{questions[index].question}</h3>
          <Options options={questions[index].options} />
          <button
            className="border p-2 px-4 text-center"
            onClick={() => dispatch({ type: "incrementIndex" })}
          >
            Next
          </button>
        </>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
    </div>
  );
};

export default Question;
