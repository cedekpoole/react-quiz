function StartScreen() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10">
      <h2>Welcome to the React Quiz!</h2>
      <p>
        Test your knowledge of React - click the button below to start the quiz.
      </p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
