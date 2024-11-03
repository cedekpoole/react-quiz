import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4 className="font-albertsans text-xl">{question.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
