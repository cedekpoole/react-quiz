import { useEffect } from "react";
import PropTypes from "prop-types";

Timer.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="mt-4 px-8 py-3 bg-[#323844] text-white rounded-lg">
      {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
