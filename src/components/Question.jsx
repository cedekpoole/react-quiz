import PropTypes from "prop-types";

Question.propTypes = {
  question: PropTypes.object.isRequired,
};

function Question({ question }) {
  const { question: q, options } = question;

  return (
    <div>
      <h4 className="font-albertsans text-xl">{q}</h4>
      <div className="flex flex-col mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="block text-lg w-full p-2 my-2 bg-[#323844] hover:bg-[#4E5460] text-white rounded-lg"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
