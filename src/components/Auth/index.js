import React, { useState } from "react";
import {
  BgImage,
  InfoContainer,
  InfoText,
  AuthContainer,
  SignInUpBtn,
} from "./AuthElements";
import SignIn from "./SignIn";
import SignUp from "./SignUP";

const Auth = () => {
  const [signIn, setSignIn] = useState(true);

  const signInUpToggle = () => {
    setSignIn(!signIn);
  };

  return (
    <BgImage>
      <InfoContainer>
        <InfoText>Once a dog loves you, it loves you till the end.</InfoText>
      </InfoContainer>
      <SignInUpBtn onClick={signInUpToggle}>
        {signIn ? "sign up" : "sign in"}
      </SignInUpBtn>
      <AuthContainer>
        {signIn ? (
          <>
            <SignIn />
          </>
        ) : (
          <>
            <SignUp />
          </>
        )}
      </AuthContainer>
    </BgImage>
  );
};

export default Auth;
