import Heading from "../components/Heading";

const CompleteScreen = ({ score, numOfQuestions }) => {
  const percentage = (score * 100) / numOfQuestions;
  return (
    <div>
      <Heading />
      <div className="text-center mt-20 text-xl">
        <p className="text-3xl mb-4">
          <strong>{percentage}%</strong>
        </p>
        <p>
          You got <strong>{score}</strong> out of{" "}
          <strong>{numOfQuestions}</strong> questions right.
        </p>
      </div>
    </div>
  );
};

export default CompleteScreen;
