import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numQuestions, points, pointsSum, index } = useQuiz();
  const progressPercentage = ((index + 1) / numQuestions) * 100;

  return (
    <header className="my-6">
      {/* Progress Bar */}
      <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden mb-2">
        <div
          className="absolute top-0 left-0 h-full bg-[#59c5db] transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Question Progress */}
      <div className="flex justify-between text-sm font-medium text-gray-200">
        <p className="text-lg">
          Question <span className="font-bold text-[#59c5db]">{index + 1}</span>{" "}
          / {numQuestions}
        </p>

        {/* Points */}
        <p className="text-lg">
          <span className="font-bold text-[#59c5db]">{points}</span> /{" "}
          {pointsSum} points
        </p>
      </div>
    </header>
  );
}

export default Progress;
