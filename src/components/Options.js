import Footer from "./Footer";

const Options = ({ options, dispatch, index, questions, usersAnswer }) => {
  return (
    <div className=" flex flex-col items-center space-y-4 w-fit mx-auto relative">
      {options.map((option, index) => (
        <button
          key={index}
          className={`border w-[330px] md:w-[500px] text-left p-4 rounded-2xl bg-black text-white ${
            index === usersAnswer ? "!bg-white text-black" : ""
          } ${usersAnswer === 0 || (usersAnswer && "cursor-not-allowed")}`}
          onClick={() => dispatch({ type: "answered", payload: index })}
          disabled={usersAnswer === 0 || usersAnswer}
        >
          {option}
        </button>
      ))}
      <Footer
        index={index}
        questions={questions}
        dispatch={dispatch}
        usersAnswer={usersAnswer}
      />
    </div>
  );
};

export default Options;
