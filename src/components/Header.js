import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onDlick = (e) => {
    console.log(e);
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button Color="green" text="Add" onClick={onDlick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
