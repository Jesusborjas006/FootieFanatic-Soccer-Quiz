const QuestionsInfo = ({ questions, allUsersAnswers }) => {
  const indexOfCorrectAnswer = questions.map((question) => {
    return question.correctAnswer;
  });

  const textOfAnswer = questions.map((question, index) => {
    return question.options[indexOfCorrectAnswer[index]];
  });

  return (
    <table className="mt-10 mx-auto">
      <thead>
        <tr>
          <th className="border p-1">Questions</th>
          <th className="border p-1">Correct Answer</th>
          <th className="border p-1">Your Answer</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr className="border" key={index}>
            <td className="p-2 ">{question.question}</td>
            <td className="px-2 border">{textOfAnswer[index]}</td>
            <td className={`px-2`}>
              {questions[index].options[allUsersAnswers[index]]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionsInfo;
