import { Link } from "react-router-dom";

const FinishBtn = () => {
  return (
    <Link
      to="/completed"
      className="border p-2 px-4 absolute right-0 bottom-[-3.5rem] rounded-md"
    >
      Finish
    </Link>
  );
};

export default FinishBtn;
