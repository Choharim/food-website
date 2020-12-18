import { Link } from "react-router-dom";
import styled from "styled-components";
import BgImg from "../../images/authBg.jpg";

export const BgImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg});
  display: flex;
`;

export const HomeIcon = styled(Link)`
  font-size: 2.2rem;
  text-decoration: none;
  padding: 0 20px;
  position: absolute;
  top: 18px;
  display: flex;
  align-items: flex-end;

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

export const HomeText = styled.span`
  font-size: 1.5rem;
  padding-left: 10px;

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
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

export const SignInUpBtn = styled.button`
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
