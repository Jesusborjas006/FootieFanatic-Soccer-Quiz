import FinishBtn from "./FinishBtn";
import NextBtn from "./NextBtn";
import Progress from "./Progress";

const Footer = ({ index, questions, dispatch, usersAnswer }) => {
  return (
    <footer className="border">
      <Progress index={index} />
      {index < questions.length - 1 ? (
        <NextBtn dispatch={dispatch} usersAnswer={usersAnswer} />
      ) : (
        <FinishBtn />
      )}
    </footer>
  );
};

export default Footer;
