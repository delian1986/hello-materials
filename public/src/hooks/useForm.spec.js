import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "./useForm";

describe("useForm", () => {
  describe("smoke tests", () => {
    it("should be a function", function () {
      expect(typeof useForm).toBe("function");
    });

    it("should require the `validations` options", () => {
      expect(() => {
        useForm({});
      }).toThrow("the option `validations` is required");
    });

    it("should require the `validations` options to be an object", () => {
      expect(() => {
        useForm({
          validations: true
        });
      }).toThrow("the option `validations` should be an object");
    });

    it("should the `initialValues` options to be an object", () => {
      expect(() => {
        useForm({
          validations: {},
          initialValues: true
        });
      }).toThrow("the option `initialValues` should be an object");
    });
  });

  describe("validateField", () => {
    describe("required", () => {
      it("should return a default error message for fields that don't have a value", () => {
        const { result } = renderHook(() =>
          useForm({
            validations: {
              email: {
                required: true
              }
            }
          })
        );

        expect(result.current.validateField("email", "")).toBe("required");
      });
    });

    describe("pattern", () => {
      it("should return an error message if the value does not satisfy the pattern", () => {
        const { result } = renderHook(() =>
          useForm({
            validations: {
              email: {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email!"
                }
              }
            }
          })
        );
        expect(result.current.validateField("email", "")).toBe("Invalid email!");
      });
    });

    describe("minLength", () => {
      it("should return an error message if the length is less than rule", () => {
        const { result } = renderHook(() =>
          useForm({
            validations: {
              password: {
                minLength: {
                  value: 4,
                  message: "Password should be 4 chars min!"
                }
              }
            }
          })
        );
        expect(result.current.validateField("password", "123")).toBe(
          "Password should be 4 chars min!"
        );
      });
    });

    describe("equals", () => {
      it("should return an error message if value is not same as target value", () => {
        const { result } = renderHook(() =>
          useForm({
            validations: {
              repeatPassword: {
                equals: {
                  value: "password",
                  message: "Passwords must match!"
                }
              }
            },
            initialValues: {
              password: "1234"
            }
          })
        );
        expect(result.current.validateField("repeatPassword", "123")).toBe(
          "Passwords must match!"
        );
      });
    });
  });

  describe("bindField", () => {
    it("should validate the email pattern", () => {
      const { result } = renderHook(() =>
        useForm({
          validations: {
            email: {
              required: true
            }
          }
        })
      );

      expect(() => {
        result.current.bindField();
      }).toThrow("The field name parameter is required");

      expect(() => {
        result.current.bindField(1);
      }).toThrow("The field name should be a string");
    });
  });

  describe("onChange", () => {
    it("should update state when called", () => {
      const { result } = renderHook(() =>
        useForm({
          validations: {
            email: {
              required: true
            }
          }
        })
      );
      const bindFieldResult = result.current.bindField("email");

      act(() => {
        bindFieldResult.onChange({ target: { value: "test@test.bg" } });
      });

      expect(result.current.values.email).toBe("test@test.bg");
      expect(result.current.errors.email).toBe("");

      act(() => {
        bindFieldResult.onChange({ target: { value: "" } });
      });

      expect(result.current.values.email).toBe("");
      expect(result.current.errors.email).toBe("required");
    });
  });

  describe("onBlur", () => {
    it("should trigger validate function", () => {
      const { result } = renderHook(() =>
        useForm({
          validations: {}
        })
      );
      const bindFieldResult = result.current.bindField("email");

      act(() => {
        bindFieldResult.onBlur({ target: { value: "test@test.bg" } });
      });
      expect(result.current.errors.email).toBe("");
    });
  });

  describe("initialValues", () => {
    it("should throw Error if initialValues is not object", () => {
      renderHook(() => {
        expect(() => {
          useForm({
            initialValues: true
          });
        }).toThrow("the option `initialValues` should be an object");
      });
    });

    it("should initialize the values state with the initial values", () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            email: "test@test.bg"
          },
          validations: {}
        })
      );
      expect(result.current.values.email).toBe("test@test.bg");
    });
  });

  describe("isValid", () => {
    it("should be a function", () => {
      const { result } = renderHook(() =>
        useForm({
          validations: {}
        })
      );
      expect(typeof result.current.isValid).toBe("function");
    });

    it("should return false when error on the form", () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            email: "tst@tst.bg",
            password: "123",
            repeatPassword: ""
          },
          validations: {
            email: {
              required: true
            },
            password: {
              minLength: {
                value: 4
              }
            },
            repeatPassword: {
              equals: {
                value: "password"
              }
            }
          }
        })
      );
      expect(result.current.isValid()).toBe(false);
    });

    it("should return true when error no the form", () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            email: "tst@tst.bg",
            password: "1234",
            repeatPassword: "1234"
          },
          validations: {
            email: {
              required: true
            },
            password: {
              minLength: {
                value: 4
              },
              required: true
            },
            repeatPassword: {
              equals: {
                value: "password"
              },
              required: true
            }
          }
        })
      );
      expect(result.current.isValid()).toBe(true);
    });
  });
});
