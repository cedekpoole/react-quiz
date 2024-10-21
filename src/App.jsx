import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return { ...state, status: "active" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

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
        <Header status={status} />
        <main className="container mx-auto px-4">
          {status === "loading" && <Loader />}
          {status === "error" && (
            <ErrorMsg message="Failed to fetch data... :(" />
          )}
          {status === "ready" && (
            <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
          )}
          {status === "active" && <Question question={questions[index]} />}
        </main>
      </div>
    </>
  );
}

export default App;
