import Heading from "../components/Heading";

const CompleteScreen = () => {
  return (
    <div>
      <Heading />
      <div className="text-center mt-20 text-xl">
        <p className="text-3xl mb-4">
          <strong>?%</strong>
        </p>
        <p>
          You got <strong>?</strong> out of <strong>?</strong> questions.
        </p>
      </div>
    </div>
  );
};

export default CompleteScreen;
