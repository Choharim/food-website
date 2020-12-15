import React from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
