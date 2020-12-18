import React, { useState } from "react";
import Main from "./components/Main";
import Auth from "./components/Auth";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Shop from "./components/Shop";

function App() {
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Route path="/" exact>
        <Main
          logIn={logIn}
          setLogIn={setLogIn}
          signUp={signUp}
          setSignUp={setSignUp}
        />
      </Route>
      <Route path="/auth" exact>
        <Auth
          logIn={logIn}
          setLogIn={setLogIn}
          signUp={signUp}
          setSignUp={setSignUp}
        />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </Router>
  );
}

export default App;
