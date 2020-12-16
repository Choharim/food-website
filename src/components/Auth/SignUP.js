import React, { useState } from "react";
import {
  SignUpContainer,
  Container,
  SignInBtn,
  SubmitForm,
  NameContainer,
  NameText,
  NameInput,
  UserNameContainer,
  UserNameText,
  UserNameInput,
  EmailContainer,
  EmailText,
  EmailInput,
  PasswordContainer,
  PasswordText,
  PasswordInput,
  CheckBoxContainer,
  CheckBox,
  CheckBoxText,
  SignUpBtn,
} from "./SignUpElements";

const SignUp = ({ signInUpToggle, signIn }) => {
  return (
    <SignUpContainer signIn={signIn}>
      <SignInBtn onClick={signInUpToggle}>sign in</SignInBtn>
      <SubmitForm>
        <Container>
          <NameContainer>
            <NameText>name</NameText>
            <NameInput
              name="name"
              type="text"
              placeholder="Write your name"
            ></NameInput>
          </NameContainer>
          <UserNameContainer>
            <UserNameText>username</UserNameText>
            <UserNameInput
              name="userName"
              type="text"
              placeholder="Write your ID"
            ></UserNameInput>
          </UserNameContainer>
        </Container>
        <EmailContainer>
          <EmailText>email</EmailText>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your Email"
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
        <CheckBoxContainer>
          <CheckBox type="checkbox" name="confrim"></CheckBox>
          <CheckBoxText>
            Create an account means you're okay with our Term of Service,
            Privacy Policy, and our default Notification Settings.
          </CheckBoxText>
        </CheckBoxContainer>
        <SignUpBtn>Create Account</SignUpBtn>
      </SubmitForm>
    </SignUpContainer>
  );
};

export default SignUp;
