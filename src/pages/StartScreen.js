import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const StartScreen = () => {
  return (
    <div className="text-center">
      <Heading />
      <Link to="/question" className="border px-2 py-1 mt-4 inline-block">
        Premier League
      </Link>
      <Link to="/champions-league" className="border px-2 py-1 mt-4 inline-block">
        Champions League
      </Link>
    </div>
  );
};

export default StartScreen;
