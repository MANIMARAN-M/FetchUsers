import React from "react";
import "./Components/Styles/style.css";
import Navbar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import SignIn from "./Components/SignIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./Components/DashBoard";
import FetchProccess from "./Components/FetchProccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/fetchproccess" component={FetchProccess} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
