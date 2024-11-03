import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { questions, index, answer, newAnswer } = useQuiz();
  const question = questions[index];
  const { options, correctOption } = question;

  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col mt-4 space-y-2">
      {options.map((option, index) => {
        // Determine button style based on current state
        const isCorrect = hasAnswered && index === correctOption;
        const isIncorrect = hasAnswered && index !== correctOption;
        const pickedAnswer = hasAnswered && index === answer;

        return (
          <button
            key={index}
            className={`text-xl w-full p-2 rounded-lg transform transition duration-300 ease-in-out border-2 border-transparent
              ${
                isCorrect
                  ? "bg-[#59c5db] shadow-lg border-[#59c5db]" // Correct answer styling
                  : isIncorrect
                  ? "bg-orange-400 border-orange-500" // Incorrect answer styling
                  : "bg-[#323844] hover:border-[#59c5db] hover:bg-[#4E5460] hover:translate-x-2 hover:shadow-lg" // Default hover state
              }
              ${hasAnswered ? "cursor-not-allowed" : "cursor-pointer"}
              ${pickedAnswer && "translate-x-2"}`}
            onClick={() => newAnswer(index)}
            disabled={hasAnswered} // Disable buttons once answered
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
