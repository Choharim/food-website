import styled, { css } from "styled-components";

export const SignInContainer = styled.div`
  background-color: #f5e9e3;
  flex-grow: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpBtn = styled.button`
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

const InputStyle = css`
  padding: 10px 0;
  width: 100%;
  text-align: center;
  outline: none;
  border: 1px solid #fad1e1;
  border-radius: 8px;
  &:focus {
    box-shadow: 0 0 5px 3px #fad1e1;
  }
`;

export const EmailContainer = styled.div`
  width: 70%;
  height: 100px;
`;

export const EmailText = styled.span`
  font-weight: 300;
`;

export const EmailForm = styled.form`
  padding-top: 5px;
`;

export const EmailInput = styled.input`
  ${InputStyle}
`;

export const PasswordContainer = styled.div`
  width: 70%;
  margin-bottom: 10px;
`;

export const PasswordText = styled.span`
  text-transform: uppercase;
  font-weight: 300;
`;

export const PasswordForm = styled.form`
  padding-top: 5px;
`;

export const PasswordInput = styled.input`
  ${InputStyle}
`;

export const SignInBtn = styled.button`
  width: 40%;
  height: 50px;
  margin-top: 20px;
  background-color: #df6c7e;
  color: white;
  outline: none;
  border: 1px solid #df6c7e;
  border-radius: 8px;
  font-size: 1.3rem;
  cursor: pointer;
  position: relative;
  left: -15%;
`;
