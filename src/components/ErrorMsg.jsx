import PropTypes from "prop-types";

ErrorMsg.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ErrorMsg({ message }) {
  return (
    <p className="text-red-600 text-sm text-center bg-slate-700 p-4 rounded">
      {message}
    </p>
  );
}
