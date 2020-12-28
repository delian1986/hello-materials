import { useForm } from "../../hooks/useForm";
import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";

const RegisterForm = (props) => {
  const { values, errors, bindField, isValid } = useForm({
    validations: {
      email: {
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: "Invalid email!"
        },
        required: {
          message: "Email is required!"
        }
      },
      password: {
        minLength: {
          value: 4,
          message: "Password should be 4 chars min!"
        },
        required: {
          message: "Password is required!"
        }
      },
      repeatPassword: {
        equals: {
          value: "password",
          message: "Passwords must match!"
        },
        required: {
          message: "Password is required"
        }
      }
    },
    initialValues: {
      email: "",
      password: "",
      repeatPassword: ""
    }
  });

  const { dispatch, history, isLoggedIn } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(values))
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        alert("Register failed");
      });
  };

  return !isLoggedIn ? (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card card-body bg-light">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <Input
              {...bindField("email")}
              label="Email"
              type="email"
              className="form-control"
              placeholder="Your email here..."
              error={errors.email}
            />
          </div>

          <div className="form-group">
            <Input
              {...bindField("password")}
              label="Password"
              type="password"
              className="form-control"
              placeholder="Password 4 chars min..."
              error={errors.password}
            />
          </div>

          <div className="form-group">
            <Input
              {...bindField("repeatPassword")}
              label="Repeat Password"
              type="password"
              className="form-control"
              placeholder="Repeat your password here..."
              error={errors.repeatPassword}
            />
          </div>

          <Button
            label="Register now !"
            type="submit"
            className="btn btn-block"
            disabled={!isValid()}
          />
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

function mapStateToProps(state) {
  const { message, email } = state.message;

  return {
    message,
    email
  };
}

export default connect(mapStateToProps)(RegisterForm);
