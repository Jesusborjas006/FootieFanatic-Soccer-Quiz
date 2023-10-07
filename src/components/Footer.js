import FinishBtn from "./FinishBtn";
import NextBtn from "./NextBtn";
import Progress from "./Progress";

const Footer = ({ index, questions, dispatch }) => {
  return (
    <footer className="border">
      <Progress index={index} />
      {index < questions.length - 1 ? (
        <NextBtn dispatch={dispatch} />
      ) : (
        <FinishBtn />
      )}
    </footer>
  );
};

export default Footer;
