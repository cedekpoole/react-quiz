import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Finished from "./components/Finished";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    case "finishQuiz":
      return { ...state, status: "finished" };
    case "newAnswer": {
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "retryQuiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const pointsSum = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#23272f] text-gray-100 pt-8 font-barlow">
        <Header />
        <main className="container mx-auto px-4">
          {status === "loading" && <Loader />}
          {status === "error" && (
            <ErrorMsg message="Failed to fetch data... :(" />
          )}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                points={points}
                pointsSum={pointsSum}
              />
              <Question
                question={questions[index]}
                dispatch={dispatch}
                answer={answer}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </>
          )}
          {status === "finished" && (
            <Finished
              points={points}
              pointsSum={pointsSum}
              dispatch={dispatch}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
