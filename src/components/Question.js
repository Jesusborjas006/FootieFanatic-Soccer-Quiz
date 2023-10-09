import Options from "./Options";
import Loading from "./Loading";
import Error from "./Error";

const Question = ({
  questions,
  status,
  index,
  dispatch,
  usersAnswer,
  score,
}) => {
  return (
    <div className="flex justify-center">
      {status === "ready" && (
        <div className="">
          <h3 className="text-center my-10 ">{questions[index].question}</h3>
          <Options
            options={questions[index].options}
            dispatch={dispatch}
            index={index}
            questions={questions}
            usersAnswer={usersAnswer}
            score={score}
          />
        </div>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
    </div>
  );
};

export default Question;
