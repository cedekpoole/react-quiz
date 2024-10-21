import { useEffect, useReducer } from "react";
import Header from "./components/Header";

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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: "dataFailed", payload: error.message });
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-[#23272f] text-gray-100 pt-8">
        <Header />
        <main className="container mx-auto p-10">
          <p className="text-3xl">
            Question 1/15{" "}
            {state.status === "ready" && state.questions[0].question}
          </p>
        </main>
      </div>
    </>
  );
}

export default App;
