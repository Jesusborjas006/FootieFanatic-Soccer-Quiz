import Heading from "../components/Heading";
import QuestionsInfo from "../components/QuestionsInfo";
import { Link } from "react-router-dom";

const CompleteScreen = ({
  score,
  numOfQuestions,
  questions,
  allUsersAnswers,
  dispatch,
}) => {
  const percentage = (score * 100) / numOfQuestions;
  return (
    <div>
      <Heading />
      <div className="text-center mt-10 text-xl">
        <p className="text-3xl mb-4">
          <strong>{percentage}%</strong>
        </p>
        <p>
          You got <strong>{score}</strong> out of{" "}
          <strong>{numOfQuestions}</strong> questions correct.
        </p>
        <div className="space-x-4 mt-4">
          <Link
            to="/question"
            className="border px-2 py-1"
            onClick={() => dispatch({ type: "restart" })}
          >
            Try Again
          </Link>
          <Link
            to="/"
            className="border px-2 py-1"
            onClick={() => dispatch({ type: "restart" })}
          >
            Different Quiz
          </Link>
        </div>
      </div>
      <QuestionsInfo questions={questions} allUsersAnswers={allUsersAnswers} />
    </div>
  );
};

export default CompleteScreen;
