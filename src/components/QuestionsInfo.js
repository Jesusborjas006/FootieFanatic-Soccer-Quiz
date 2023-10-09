const QuestionsInfo = ({ questions, usersAnswer, allUsersAnswers }) => {
  const correctAnswer = questions[0].correctAnswer;

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
            <td className="border px-2 ">{question.options[correctAnswer]}</td>
            <td className="px-2 ">
              {questions[index].options[allUsersAnswers[index]]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionsInfo;
