const Options = ({ options }) => {
  return (
    <div className=" flex flex-col items-center space-y-4">
      {options.map((option, index) => (
        <button
          key={index}
          className="border w-[500px] text-left p-4   rounded-2xl"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
