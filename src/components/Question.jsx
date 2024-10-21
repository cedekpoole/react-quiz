import PropTypes from "prop-types";
import Options from "./Options";

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

function Question({ question }) {
  const { question: q, options } = question;

  return (
    <div>
      <h4 className="font-albertsans text-xl">{q}</h4>
      <Options options={options} />
    </div>
  );
}

export default Question;
