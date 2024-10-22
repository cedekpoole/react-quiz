import PropTypes from "prop-types";

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

function Footer({ children }) {
  return <footer className="flex justify-between">{children}</footer>;
}

export default Footer;
