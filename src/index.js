import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Home from './home'
import About from './about'
import Login from './login'
import Navbar from './navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
ReactDOM.render((
  <Router>
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
const Home = () => {
  return (
>>>>>>> 95fa2c9c2a5d229826b7c37bb37ada2e2d03ded1
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
<<<<<<< HEAD
=======
  );
};
 
const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};
 
const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

ReactDOM.render((
  <Router>
  <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
  </div>
>>>>>>> 95fa2c9c2a5d229826b7c37bb37ada2e2d03ded1
  </Router>),
  document.getElementById('root')
);