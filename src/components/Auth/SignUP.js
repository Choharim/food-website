import React, { useState } from "react";
import {
  Container,
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

const SignUp = () => {
  const [userName, setName] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInfo, setUserInfo] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInfo({
      userName,
      userID,
      email,
      password,
    });
  };

  const submitInfo = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "userName") {
      setName(value);
    }
    if (name === "userID") {
      setUserID(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <SubmitForm onSubmit={handleSubmit}>
        <Container>
          <NameContainer>
            <NameText>User Name</NameText>
            <NameInput
              name="userName"
              type="text"
              placeholder="Write your name"
              onChange={submitInfo}
              value={userName}
            />
          </NameContainer>
          <UserNameContainer>
            <UserNameText>User ID</UserNameText>
            <UserNameInput
              name="userID"
              type="text"
              placeholder="Write your ID"
              onChange={submitInfo}
              value={userID}
            />
          </UserNameContainer>
        </Container>
        <EmailContainer>
          <EmailText>Email</EmailText>
          <EmailInput
            name="email"
            type="email"
            placeholder="Write your Email"
            onChange={submitInfo}
            value={email}
          />
        </EmailContainer>
        <PasswordContainer>
          <PasswordText>Password</PasswordText>
          <PasswordInput
            name="password"
            type="password"
            placeholder="Write 6+ charcters"
            onChange={submitInfo}
            value={password}
          />
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
    </>
  );
};

export default SignUp;
