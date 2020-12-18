import React, { useState } from "react";
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

const SignIn = ({ setSuccess }) => {
  const [userIDorAdd, setUserIDorAdd] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userIDorAdd && password && password.length > 6) {
      setUserIDorAdd("");
      setPassword("");
      setSuccess(true);
    }
  };

  const submitInfo = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setUserIDorAdd(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <SubmitForm onSubmit={handleSubmit}>
        <EmailContainer>
          <EmailText>User ID or Email Address</EmailText>
          <EmailInput
            name="email"
            type="email"
            onChange={submitInfo}
            value={userIDorAdd}
            placeholder="Write your ID or Email"
          ></EmailInput>
        </EmailContainer>
        <PasswordContainer>
          <PasswordText>Password</PasswordText>
          <PasswordInput
            name="password"
            type="password"
            onChange={submitInfo}
            value={password}
            placeholder="Write 6+ charcters"
          ></PasswordInput>
        </PasswordContainer>
        <SignInBtn type="submit" value="Sign In" />
      </SubmitForm>
    </>
  );
};

export default SignIn;
