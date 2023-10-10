import { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router";
import StartScreen from "../pages/StartScreen";
import QuestionPage from "../pages/QuestionPage";
import CompleteScreen from "../pages/CompleteScreen";
import questionsData from "../questionsData";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  usersAnswer: null,
  score: 0,
  allUsersAnswers: [],
};

const reducer = (state, actions) => {
  if (actions.type === "dataRecieved") {
    return {
      ...state,
      questions: actions.payload,
      status: "ready",
    };
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
      allUsersAnswers: [...state.allUsersAnswers, actions.payload],
    };
  } else if (actions.type === "restart") {
    return {
      ...initialState,
      questions: state.questions,
      status: "ready",
    };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, usersAnswer, score, allUsersAnswers } =
    state;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        dispatch({ type: "notReady" });
        const response = await fetch("http://localhost:8000/questions");
        if (!response.ok) {
          dispatch({ type: "dataFailed", payload: "error" });
        }
        const data = await response.json();
        dispatch({ type: "dataRecieved", payload: questionsData });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    fetchQuestions();
  }, []);

  return (
    <main className="mt-20 px-5">
      <Routes>
        <Route path="/" element={<StartScreen dispatch={dispatch} />} />
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
            <CompleteScreen
              score={score}
              numOfQuestions={questions.length}
              questions={questions}
              usersAnswer={usersAnswer}
              allUsersAnswers={allUsersAnswers}
              dispatch={dispatch}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
