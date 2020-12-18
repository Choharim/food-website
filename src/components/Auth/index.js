import React, { useState } from "react";
import {
  BgImage,
  InfoContainer,
  InfoText,
  AuthContainer,
  SignInUpBtn,
  HomeIcon,
  HomeText,
} from "./AuthElements";
import SignIn from "./SignIn";
import SignUp from "./SignUP";
import { MdPets } from "react-icons/md";
import Success from "./Success";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);
  const [success, setSuccess] = useState(false);

  const signInUpToggle = () => {
    setSignIn(!signIn);
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
      <SignInUpBtn onClick={signInUpToggle}>
        {signIn ? "sign up" : "sign in"}
      </SignInUpBtn>
      <AuthContainer>
        {success ? (
          <>
            <Success />
          </>
        ) : signIn ? (
          <>
            <SignIn setSuccess={setSuccess} />
          </>
        ) : (
          <>
            <SignUp setSuccess={setSuccess} />
          </>
        )}
      </AuthContainer>
    </BgImage>
  );
};

export default Auth;
