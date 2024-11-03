import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { answer, index, numQuestions, nextQuestion, finishQuiz } = useQuiz();
  const notAnswered = answer === null;
  if (index < numQuestions - 1)
    return (
      <button
        className={`mt-4 px-8 py-3 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg ${
          notAnswered && "cursor-not-allowed hover:bg-[#323844]"
        }`}
        onClick={() => nextQuestion()}
        disabled={notAnswered}
      >
        Next Question
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="mt-4 px-8 py-3 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg"
        onClick={() => finishQuiz()}
      >
        Finish Quiz
      </button>
    );
}

export default NextButton;
