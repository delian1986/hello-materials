import { PropTypes } from "prop-types";
import { Label } from "./Label";

export const Input = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  className,
  onBlur,
  value,
  error,
  label
}) => {
  return (
    <>
      <Label name={name} label={label} />
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        className={className}
      />
      {error && <small className="text-danger">{error}</small>}
    </>
  );
};

Input.defaultProps = {
  type: "text",
  className: ""
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["number", "text", "password", "email", "checkbox"]),
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string
};
