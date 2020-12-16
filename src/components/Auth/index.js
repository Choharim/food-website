import React from "react";
import {
  AuthContainer,
  BgImage,
  InfoContainer,
  InfoText,
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
} from "./AuthElements";

const Auth = () => {
  return (
    <BgImage>
      <InfoContainer>
        <InfoText>Once a dog loves you, it loves you till the end.</InfoText>
      </InfoContainer>
      <>
        <AuthContainer>
          <SignInBtn>sign in</SignInBtn>
          <Container>
            <NameContainer>
              <NameText>name</NameText>
              <NameForm>
                <NameInput></NameInput>
              </NameForm>
            </NameContainer>
            <UserNameContainer>
              <UserNameText>username</UserNameText>
              <UserNameForm>
                <UserNameInput></UserNameInput>
              </UserNameForm>
            </UserNameContainer>
          </Container>
        </AuthContainer>
      </>
    </BgImage>
  );
};

export default Auth;
