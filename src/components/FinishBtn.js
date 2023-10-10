import { Link } from "react-router-dom";

const FinishBtn = ({ dispatch, usersAnswer }) => {
  return (
    <>
      {usersAnswer === 0 || usersAnswer ? (
        <Link
          to="/completed"
          className="border p-2 px-4 absolute right-0 bottom-[-3.5rem] rounded-md bg-white"
        >
          Finish
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default FinishBtn;
