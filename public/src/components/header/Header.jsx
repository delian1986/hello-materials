import { NavLink as Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = (props) => {
  const { email, isLoggedIn } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
      <div className="container">
        <a className="navbar-brand">VrScans</a>
        <ul className="navbar-nav">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <a className="nav-link"> Hello, {email} !</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userDetails">
                  User Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

//todo: bootstrap styles

function mapStateToProps(state) {
  const { email, isLoggedIn } = state.auth;
  return {
    email,
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Header);
