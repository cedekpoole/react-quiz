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
          className="block text-xl w-full p-2 my-2 bg-[#323844] text-white rounded-lg
                   transform transition duration-300 ease-in-out
                   hover:bg-[#4E5460] hover:translate-x-2 hover:shadow-lg border-2 border-transparent hover:border-[#59c5db]"
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
