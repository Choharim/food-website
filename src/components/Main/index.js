import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";

const Main = ({ logIn, setLogIn, signUp, setSignUp }) => {
  return (
    <>
      <Navbar
        logIn={logIn}
        setLogIn={setLogIn}
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <Hero />
    </>
  );
};

export default Main;
