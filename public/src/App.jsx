import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import LoginForm from "./components/user/LoginForm";
import RegisterForm from "./components/user/RegisterForm";
import Logout from "./components/user/Logout";
import { NotFound } from "./components/notFound/NotFound";
import Header from "./components/header/Header";
import { MaterialsContainer } from "./components/materials/MaterialsContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/user-details" component={UserDetails} />
          <Route path="/" exact component={MaterialsContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

function UserDetails() {
  return <h2>UserDetails Page</h2>;
}

export default hot(App);
