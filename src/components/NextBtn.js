const NextBtn = ({ dispatch, usersAnswer }) => {
  return (
    <>
      {usersAnswer === 0 || usersAnswer ? (
        <button
          className="border p-2 px-4 absolute right-0 bottom-[-3.5rem] rounded-md bg-white"
          onClick={() => dispatch({ type: "incrementIndex" })}
        >
          Next
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default NextBtn;
