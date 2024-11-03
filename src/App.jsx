import Header from "./components/Header";
import Loader from "./components/Loader";
import ErrorMsg from "./components/ErrorMsg";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import { QuizProvider, useQuiz } from "./contexts/QuizContext";

function QuizContent() {
  const { status } = useQuiz();

  return (
    <div className="min-h-screen bg-[#23272f] text-gray-100 pt-8 font-barlow">
      <Header />
      <main className="container mx-auto px-4">
        {status === "loading" && <Loader />}
        {status === "error" && (
          <ErrorMsg message="Failed to fetch data... :(" />
        )}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <Finished />}
      </main>
    </div>
  );
}

function App() {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
}

export default App;
