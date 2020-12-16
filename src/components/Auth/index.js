import React, { useState } from "react";
import { BgImage, InfoContainer, InfoText } from "./AuthElements";
import SignIn from "./SignIn";
import SignUp from "./SignUP";

const Auth = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <BgImage>
      <InfoContainer>
        <InfoText>Once a dog loves you, it loves you till the end.</InfoText>
      </InfoContainer>
      {!signIn ? <SignIn /> : <SignUp />}
    </BgImage>
  );
};

export default Auth;
