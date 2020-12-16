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
`;

export const SignInBtn = styled.button`
  text-transform: uppercase;
  outline: none;
  border-style: none;
  background-color: transparent;
  color: #df6c7e;
  font-size: 1.3rem;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Container = styled.div`
  width: 70%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  width: 50%;
  padding-right: 10px;
`;

export const NameText = styled.span`
  text-transform: uppercase;
  font-weight: 300;
`;

export const NameForm = styled.form`
  padding-top: 5px;
`;

export const NameInput = styled.input`
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;

export const UserNameContainer = styled.div`
  width: 50%;
  padding-left: 10px;
`;

export const UserNameText = styled.span`
  text-transform: uppercase;
  font-weight: 300;
`;

export const UserNameForm = styled.form`
  padding-top: 5px;
`;

export const UserNameInput = styled.input`
  padding: 10px 0;
  width: 100%;
  text-align: center;
`;
