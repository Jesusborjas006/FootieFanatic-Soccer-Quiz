import Heading from "../components/Heading";
import QuestionsInfo from "../components/QuestionsInfo";

const CompleteScreen = ({
  score,
  numOfQuestions,
  questions,
  allUsersAnswers,
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
          <strong>{numOfQuestions}</strong> questions right.
        </p>
      </div>
      <QuestionsInfo questions={questions} allUsersAnswers={allUsersAnswers} />
    </div>
  );
};

export default CompleteScreen;
