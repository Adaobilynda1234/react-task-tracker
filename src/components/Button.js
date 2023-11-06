import PropTypes from "prop-types";

const Button = ({ Color, text, onClick }) => {
  const onDlick = (e) => {
    console.log(e);
  };
  return (
    <button
      onClick={onDlick}
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
  onClick: PropTypes.func,
};

export default Button;
