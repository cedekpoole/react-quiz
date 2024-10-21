import PropTypes from "prop-types";

NextButton.propTypes = {
  answer: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  numQuestions: PropTypes.number.isRequired,
};

function NextButton({ answer, dispatch, index, numQuestions }) {
  const notAnswered = answer === null;
  if (index < numQuestions - 1)
    return (
      <button
        className={`mt-4 px-8 py-3 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg ${
          notAnswered && "cursor-not-allowed hover:bg-[#323844]"
        }`}
        onClick={() => dispatch({ type: "nextQuestion" })}
        disabled={notAnswered}
      >
        Next Question
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="mt-4 px-8 py-3 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg"
        onClick={() => dispatch({ type: "finishQuiz" })}
      >
        Finish Quiz
      </button>
    );
}

export default NextButton;
