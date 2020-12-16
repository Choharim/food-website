import React from "react";
import {
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
          <EmailText>User ID or Email Address</EmailText>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your ID or Email"
          ></EmailInput>
        </EmailContainer>
        <PasswordContainer>
          <PasswordText>Password</PasswordText>
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
