import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Members from "./Components/Pages/Members";
import Yuna from "./Components/Pages/Yuna";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/yuna" component={Yuna} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
