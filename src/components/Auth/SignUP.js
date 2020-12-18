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
  const [userName, setUserName] = useState("");
  const [userID, setUserID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const userObj = {
    userName,
    userID,
    email,
    password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName && userID && email && password && password.length > 6) {
      localStorage.setItem("signUp", JSON.stringify(userObj));
      setUserName("");
      setUserID("");
      setEmail("");
      setPassword("");
      setCheckBox(true);
    }
  };

  const submitInfo = (event) => {
    const {
      target: { value, name },
    } = event;

    if (name === "userName") {
      setUserName(value);
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

  const checkToggle = () => {
    setCheckBox(!checkBox);
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
          <CheckBox
            type="checkbox"
            name="checkbox"
            checked={checkBox}
            onClick={checkToggle}
          ></CheckBox>
          <CheckBoxText>
            Create an account means you're okay with our Term of Service,
            Privacy Policy, and our default Notification Settings.
          </CheckBoxText>
        </CheckBoxContainer>
        <SignUpBtn
          onSubmit={handleSubmit}
          type="submit"
          value="Create Account"
        />
      </SubmitForm>
    </>
  );
};

export default SignUp;
