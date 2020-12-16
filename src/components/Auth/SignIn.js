import React from "react";
import {
  SignUpBtn,
  SubmitForm,
  EmailContainer,
  EmailText,
  EmailInput,
  PasswordContainer,
  PasswordText,
  PasswordInput,
  SignInBtn,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <SubmitForm>
        <EmailContainer>
          <EmailText>UserName or Email Address</EmailText>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your ID or Email"
          ></EmailInput>
        </EmailContainer>
        <PasswordContainer>
          <PasswordText>password</PasswordText>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Write 6+ charcters"
          ></PasswordInput>
        </PasswordContainer>
        <SignInBtn>Sign In</SignInBtn>
      </SubmitForm>
    </>
  );
};

export default SignIn;
