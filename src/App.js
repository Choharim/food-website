import React from "react";
import Main from "./components/Main";
import Auth from "./components/Auth";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </Router>
  );
}

export default App;
