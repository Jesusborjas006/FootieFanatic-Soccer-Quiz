import { Link } from "react-router-dom";
import Heading from "../components/Heading";

const StartScreen = () => {
  return (
    <div className="text-center pt-10">
      <Heading />
      <p className="mt-10 mb-4 w-[330px] sm:w-[60%] text-lg mx-auto ">
        Welcome to the Premier League Quiz! Test your knowledge of English
        Premier League football with these fun and challenging questions.
        Whether you're a die-hard fan or just looking to learn more about the
        world of football, this quiz is for you. Let's get started!
      </p>
      <Link
        to="/question"
        className="border px-3 py-2 mt-4 inline-block text-lg rounded-2xl bg-white"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default StartScreen;
