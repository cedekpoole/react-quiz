import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: "loading", //'loading', 'error', 'ready', 'active', 'finished'
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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
      <div className="min-h-screen bg-[#23272f] text-gray-100 pt-8">
        <Header />
        <main className="container mx-auto px-4">
          {status === "loading" && <Loader />}
          {status === "error" && (
            <ErrorMsg message="Failed to fetch data... :(" />
          )}
          {status === "ready" && <StartScreen />}
        </main>
      </div>
    </>
  );
}

export default App;
