import styled from "styled-components";
import BgImg from "../../images/Bg.jpg";

export const BgImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg});
  display: flex;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

export const InfoText = styled.h1`
  color: white;
  padding: 0 20px;
  margin-top: 15%;
  overflow-wrap: normal;
  line-height: 50px;
`;
export const AuthContainer = styled.div`
  background-color: #f5e9e3;
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const SignInBtn = styled.button`
  text-transform: uppercase;
  outline: none;
  border-style: none;
  background-color: transparent;
  color: #df6c7e;
  font-size: 1.3rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Container = styled.div`
  display: flex;
  height: 200px;
`;

export const NameContainer = styled.div``;

export const NameText = styled.span``;

export const NameForm = styled.form``;

export const NameInput = styled.input``;

export const UserNameContainer = styled.div``;

export const UserNameText = styled.span``;

export const UserNameForm = styled.form``;

export const UserNameInput = styled.input``;
