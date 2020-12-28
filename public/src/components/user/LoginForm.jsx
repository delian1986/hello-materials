import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { Redirect } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const LoginForm = (props) => {
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
      }
    },
    initialValues: {
      email: "",
      password: ""
    }
  });

  const { dispatch, history, isLoggedIn } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(values))
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        alert("login failed");
      });
  };

  return !isLoggedIn ? (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="card card-body bg-light">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
          <Input
            {...bindField("password")}
            label="Password"
            type="password"
            className="form-control"
            placeholder="Password 4 chars min..."
            error={errors.password}
          />
          <Button
            label="Login here !"
            className="btn btn-block"
            type="submit"
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
  const { isLoggedIn } = state.auth;
  const { message } = state.message;

  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(LoginForm);
