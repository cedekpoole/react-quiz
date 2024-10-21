import Logo from "../assets/logos_react.svg";
import PropTypes from "prop-types";

Header.propTypes = {
  status: PropTypes.string.isRequired,
};

function Header({ status }) {
  return (
    <header className="flex justify-center items-center p-4 gap-8">
      <h1 className="text-4xl font-bold font-albertsans">REACT QUIZ</h1>
      <img
        src={Logo}
        alt="React Logo"
        width="100"
        className={`${
          status === "active" ? "animate-pulse" : "animate-spin-slow"
        }`}
      />
    </header>
  );
}

export default Header;
