import { Redirect } from "react-router-dom";
import { logout } from "../../actions/auth";
import { useEffect } from "react";
import { connect } from "react-redux";

const Logout = (props) => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(logout());
  });

  return <Redirect to="/" />;
};

export default connect()(Logout);
