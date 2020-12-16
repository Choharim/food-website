import styled, { css } from "styled-components";

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

export const SubmitForm = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailContainer = styled.div`
  width: 100%;
  height: 100px;
`;

export const EmailText = styled.span`
  font-weight: 300;
`;

export const EmailInput = styled.input`
  ${InputStyle}
  margin-top:10px;
`;

export const PasswordContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const PasswordText = styled.span`
  font-weight: 300;
`;

export const PasswordInput = styled.input`
  ${InputStyle}
  margin-top:10px;
`;

export const SignInBtn = styled.button`
  width: 50%;
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
  left: -25%;
`;
