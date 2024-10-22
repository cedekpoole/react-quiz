import { useEffect } from "react";
import PropTypes from "prop-types";

Timer.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function Timer({ secondsRemaining, dispatch }) {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="mt-4 px-8 py-3 bg-[#323844] text-white rounded-lg">
      {secondsRemaining} seconds remaining
    </div>
  );
}

export default Timer;
