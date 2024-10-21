import PropTypes from "prop-types";

Finished.propTypes = {
  points: PropTypes.number.isRequired,
  pointsSum: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function Finished({ points, pointsSum, dispatch }) {
  const percentage = Math.ceil((points / pointsSum) * 100);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="max-w-xl w-full text-center px-8 py-12 border border-gray-200 shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-4 font-albertsans ">
          Quiz Finished!
        </h1>
        <p className="text-lg mb-6">
          You scored <span className="text-[#59c5db] font-bold">{points}</span>{" "}
          out of <span className="text-[#59c5db] font-bold">{pointsSum}</span>{" "}
          points ({percentage}%).
        </p>

        {/* Button (optional for retry) */}
        <button
          onClick={() => dispatch({ type: "retryQuiz" })}
          className="mt-4 px-5 py-2.5 bg-[#59c5db] text-[#20232a] font-medium rounded-md hover:bg-[#4fb3d3] transition-colors"
        >
          Retake Quiz
        </button>
      </div>
    </div>
  );
}

export default Finished;
