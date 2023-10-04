import { Route, Routes } from "react-router";
import StartScreen from "../pages/StartScreen";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<StartScreen />} />
      </Routes>
    </main>
  );
}

export default App;
