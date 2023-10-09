import Heading from "../components/Heading";
import Question from "../components/Question";

const QuestionPage = ({
  questions,
  status,
  index,
  dispatch,
  usersAnswer,
  score,
}) => {
  return (
    <div>
      <Heading />
      <Question
        questions={questions}
        status={status}
        index={index}
        dispatch={dispatch}
        usersAnswer={usersAnswer}
        score={score}
      />
    </div>
  );
};

export default QuestionPage;
