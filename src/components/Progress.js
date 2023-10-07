const Progress = ({ index }) => {
  return (
    <div className="absolute left-0 bottom-[-3rem]">
      <p>Question {index + 1} / 10</p>
    </div>
  );
};

export default Progress;
