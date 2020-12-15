import React from "react";
import Main from "./components/Main";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Main />
    </Router>
  );
}

export default App;
