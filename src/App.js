import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
    </Router>
  );
}

export default App;
