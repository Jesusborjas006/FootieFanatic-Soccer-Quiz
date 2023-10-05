import Options from "./Options";
import Loading from "./Loading";
import Error from "./Error";
import { Link } from "react-router-dom";

const Question = ({questions, status, index, dispatch }) => {
  return (
    <div>
      {status === "ready" && (
        <>
          <h3 className="text-center my-10">{questions[index].question}</h3>
          <Options options={questions[index].options} />

          {index < questions.length - 1 ? (
            <button
              className="border p-2 px-4"
              onClick={() => dispatch({ type: "incrementIndex" })}
            >
              Next
            </button>
          ) : (
            <Link to="/completed" className="border p-2 px-4">
              Finish
            </Link>
          )}
        </>
      )}
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
    </div>
  );
};

export default Question;
