import PropTypes from "prop-types";

Options.propTypes = {
  options: PropTypes.array.isRequired,
};

function Options({ options }) {
  return (
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
  );
}

export default Options;
