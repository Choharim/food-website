import React from "react";
import {
  SignInContainer,
  SignUpBtn,
  EmailContainer,
  EmailText,
  EmailForm,
  EmailInput,
  PasswordContainer,
  PasswordText,
  PasswordForm,
  PasswordInput,
  SignInBtn,
} from "./SignInElements";

const SignIn = () => {
  return (
    <SignInContainer>
      <SignUpBtn>sign up</SignUpBtn>
      <EmailContainer>
        <EmailText>UserName or Email Address</EmailText>
        <EmailForm>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your ID or Email"
          ></EmailInput>
        </EmailForm>
      </EmailContainer>
      <PasswordContainer>
        <PasswordText>password</PasswordText>
        <PasswordForm>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Write 6+ charcters"
          ></PasswordInput>
        </PasswordForm>
      </PasswordContainer>
      <SignInBtn>Sign In</SignInBtn>
    </SignInContainer>
  );
};

export default SignIn;
