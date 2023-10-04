import { useEffect } from "react";

const Question = () => {
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:3030/questions");
      const data = await response.json();
      console.log(data);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <button>Question 1</button>
    </div>
  );
};

export default Question;
