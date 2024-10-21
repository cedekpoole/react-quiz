import PropTypes from "prop-types";

Finished.propTypes = {
  points: PropTypes.number.isRequired,
  pointsSum: PropTypes.number.isRequired,
};

function Finished({ points, pointsSum }) {
  const percentage = Math.ceil((points / pointsSum) * 100);
  return (
    <div className="text-center mt-10 p-10">
      <h1 className="text-4xl font-bold mb-4 font-albertsans">
        Quiz Finished!
      </h1>
      <p className="text-xl">
        You scored <span className="text-[#59c5db] font-bold">{points}</span>{" "}
        out of <span className="text-[#59c5db]">{pointsSum}</span> points (
        {percentage}
        %).
      </p>
    </div>
  );
}

export default Finished;
