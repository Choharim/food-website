import React, { useState } from "react";
import { BgImage, InfoContainer, InfoText } from "./AuthElements";
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
      <SignIn signInUpToggle={signInUpToggle} signIn={signIn} />
      <SignUp signInUpToggle={signInUpToggle} signIn={signIn} />
    </BgImage>
  );
};

export default Auth;
