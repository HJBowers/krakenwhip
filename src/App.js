import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Login, {fakeAuth} from "./Components/Login";
// import Category from './Components/Category';
import Products from './Components/Products';
import Home from './Components/Home';
import Admin from './Components/Admin';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App-banner text-center">
          <img src={logo} className="App-logo rounded" alt="Krakenwhip" />
        </div>
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )}
    />
  );
};

export default App;
