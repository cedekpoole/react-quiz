import PropTypes from "prop-types";

StartScreen.propTypes = {
  numQuestions: PropTypes.number.isRequired,
};

function StartScreen({ numQuestions }) {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10 gap-2 text-center">
      <h2 className="text-3xl font-bold mb-1 font-albertsans">
        Welcome to the React Quiz!
      </h2>
      <p className="text-lg">
        Test your knowledge of React with {numQuestions} questions - click the
        button below to start the quiz.
      </p>
      <button className="mt-4 px-8 py-3 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg">
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
