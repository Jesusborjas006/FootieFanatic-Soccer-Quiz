import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router";
import StartScreen from "../pages/StartScreen";
import QuestionPage from "../pages/QuestionPage";
import CompleteScreen from "../pages/CompleteScreen";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  usersAnswer: null,
  score: 0,
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
    return {
      ...state,
      usersAnswer: actions.payload,
      score:
        actions.payload === state.questions[state.index].correctAnswer
          ? state.score + 1
          : state.score,
    };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, usersAnswer, score } = state;

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
    <main className="mt-20 px-5">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route
          path="/question"
          element={
            <QuestionPage
              questions={questions}
              status={status}
              index={index}
              dispatch={dispatch}
              usersAnswer={usersAnswer}
              score={score}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <CompleteScreen score={score} numOfQuestions={questions.length} />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
