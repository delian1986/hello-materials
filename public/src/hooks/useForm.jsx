import { useState } from "react";

export function useForm({ validations, initialValues = {} }) {
  if (!validations) {
    throw new Error("the option `validations` is required");
  }

  if (typeof validations !== "object") {
    throw new Error("the option `validations` should be an object");
  }

  if (typeof initialValues !== "object") {
    throw new Error("the option `initialValues` should be an object");
  }

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function validateField(name, value) {
    const rules = validations[name];

    if (rules) {
      if (rules.required) {
        if (!value.trim()) {
          return typeof rules.required === "string"
            ? rules.required
            : rules.required.message || "required";
        }
      }

      if (rules.pattern) {
        if (!rules.pattern.value.test(value)) {
          return rules.pattern.message || "invalid";
        }
      }

      if (rules.equals) {
        if (values[rules.equals.value] !== value) {
          return rules.equals.message || "invalid";
        }
      }

      if (rules.minLength) {
        if (value.length < rules.minLength.value) {
          return rules.minLength.message || "invalid";
        }
      }
    }

    return "";
  }

  function bindField(name) {
    if (!name) {
      throw new Error("The field name parameter is required");
    }

    if (name && typeof name !== "string") {
      throw new Error("The field name should be a string");
    }

    return {
      value: values[name] || "",
      onChange: (e) => {
        const { value } = e.target;

        setValues((state) => ({
          ...state,
          [name]: value
        }));

        setErrors((state) => ({
          ...state,
          [name]: validateField(name, value)
        }));
      },
      onBlur: (e) => {
        const { value } = e.target;
        setErrors((state) => ({
          ...state,
          [name]: validateField(name, value)
        }));
      },
      name: name
    };
  }

  function isValid() {
    const hasErrors = Object.keys(validations).some((name) =>
      validateField(name, values[name])
    );

    return !hasErrors;
  }

  return {
    values,
    errors,
    validateField,
    bindField,
    isValid
  };
}
