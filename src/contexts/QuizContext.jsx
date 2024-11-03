import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

QuizProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const QuizContext = createContext();
const SECS_PER_QUESTION = 10;

const BASE_URL = `${import.meta.env.VITE_JSONBIN_BASE_URL}`;
const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY;

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
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
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const pointsSum = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );
  const startQuiz = () => {
    dispatch({ type: "startQuiz" });
  };

  const newAnswer = (index) => {
    dispatch({ type: "newAnswer", payload: index });
  };

  const countDown = () => {
    dispatch({ type: "tick" });
  };

  const nextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };

  const finishQuiz = () => {
    dispatch({ type: "finishQuiz" });
  };

  const retryQuiz = () => {
    dispatch({ type: "retryQuiz" });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}`, {
          headers: {
            "X-Master-Key": API_KEY,
          },
        });
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data.record.questions });
      } catch (error) {
        console.error(error);
        dispatch({ type: "dataFailed" });
      }
    }
    fetchData();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        pointsSum,
        startQuiz,
        newAnswer,
        countDown,
        nextQuestion,
        finishQuiz,
        retryQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
