import { PropTypes } from "prop-types";

export const Button = ({ type, className, handleClick, disabled, label }) => (
  <button
    type={type}
    className={className}
    onClick={handleClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.defaultProps = {
  type: "submit",
  className: ""
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  className: PropTypes.string,
  label: PropTypes.string
};
