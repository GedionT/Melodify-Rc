import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import Go from "./common/Go";
import Home from "./Home";
import About from "./About";
import MLH from "./MLH";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mlh" component={MLH} />
      </Switch>
      <Go />
    </div>
  );
}
