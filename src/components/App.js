import { Route, Routes } from "react-router";
import StartScreen from "../pages/StartScreen";
import QuestionPage from "../pages/QuestionPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </main>
  );
}

export default App;
