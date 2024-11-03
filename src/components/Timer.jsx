import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { secondsRemaining, countDown } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      countDown();
    }, 1000);

    return () => clearInterval(id);
  }, [countDown]);

  return (
    <div className="mt-4 px-8 py-3 bg-[#323844] text-white rounded-lg">
      {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
