import Footer from "./Footer";

const Options = ({ options, dispatch, index, questions }) => {
  return (
    <div className=" flex flex-col items-center space-y-4 w-fit mx-auto relative">
      {options.map((option, index) => (
        <button
          key={index}
          className="border w-[330px] md:w-[500px] text-left p-4 rounded-2xl"
        >
          {option}
        </button>
      ))}
      <Footer index={index} questions={questions} dispatch={dispatch} />
    </div>
  );
};

export default Options;
