import React, { useState } from "react";
import {
  SignUpContainer,
  Container,
  SignInBtn,
  NameContainer,
  NameText,
  NameForm,
  NameInput,
  UserNameContainer,
  UserNameText,
  UserNameForm,
  UserNameInput,
  EmailContainer,
  EmailText,
  EmailForm,
  EmailInput,
  PasswordContainer,
  PasswordText,
  PasswordForm,
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
      <Container>
        <NameContainer>
          <NameText>name</NameText>
          <NameForm>
            <NameInput
              name="name"
              type="text"
              placeholder="Write your name"
            ></NameInput>
          </NameForm>
        </NameContainer>
        <UserNameContainer>
          <UserNameText>username</UserNameText>
          <UserNameForm>
            <UserNameInput
              name="userName"
              type="text"
              placeholder="Write your ID"
            ></UserNameInput>
          </UserNameForm>
        </UserNameContainer>
      </Container>
      <EmailContainer>
        <EmailText>email</EmailText>
        <EmailForm>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your Email"
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
      <CheckBoxContainer>
        <CheckBox type="checkbox" name="confrim"></CheckBox>
        <CheckBoxText>
          Create an account means you're okay with our Term of Service, Privacy
          Policy, and our default Notification Settings.
        </CheckBoxText>
      </CheckBoxContainer>
      <SignUpBtn>Create Account</SignUpBtn>
    </SignUpContainer>
  );
};

export default SignUp;
