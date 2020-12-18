import React from "react";
import {
  BgImage,
  InfoContainer,
  InfoText,
  AuthContainer,
  HomeIcon,
  HomeText,
} from "./AuthElements";
import SignIn from "./SignIn";
import SignUp from "./SignUP";
import { MdPets } from "react-icons/md";
import Success from "./Success";

const Auth = ({ logIn, setLogIn, signUp, setSignUp }) => {
  const signInUpToggel = () => {
    setSignUp(!signUp);
  };

  return (
    <BgImage>
      <HomeIcon to="/">
        <MdPets />
        <HomeText>Home</HomeText>
      </HomeIcon>
      <InfoContainer>
        <InfoText>Once a dog loves you, it loves you till the end.</InfoText>
      </InfoContainer>
      <AuthContainer>
        {logIn && signUp ? (
          <>
            <Success />
          </>
        ) : signUp ? (
          <>
            <SignIn
              setLogIn={setLogIn}
              setSignUp={setSignUp}
              signInUpToggel={signInUpToggel}
            />
          </>
        ) : (
          <>
            <SignUp
              setLogIn={setLogIn}
              setSignUp={setSignUp}
              signInUpToggel={signInUpToggel}
            />
          </>
        )}
      </AuthContainer>
    </BgImage>
  );
};

export default Auth;
