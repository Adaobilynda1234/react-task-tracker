import PropTypes from "prop-types";

const Button = ({ Color, text }) => {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: Color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  Color: "steelblue",
};
Button.propTypes = {
  text: PropTypes.string,
  Color: PropTypes.string,
};

export default Button;
