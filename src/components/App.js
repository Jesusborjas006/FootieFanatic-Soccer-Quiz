import { Route, Routes } from "react-router";
import StartScreen from "../pages/StartScreen";
import QuestionPage from "../pages/QuestionPage";
import CompleteScreen from "../pages/CompleteScreen";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/completed" element={<CompleteScreen />} />
      </Routes>
    </main>
  );
}

export default App;
