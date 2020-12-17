import styled, { css } from "styled-components";

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-weight: 300;
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

export const NameInput = styled.input`
  ${InputStyle}
`;

export const UserNameContainer = styled.div`
  width: 50%;
  padding-left: 10px;
`;

export const UserNameText = styled.span`
  font-weight: 300;
`;

export const UserNameInput = styled.input`
  ${InputStyle}
`;

export const EmailContainer = styled.div`
  width: 70%;
  height: 100px;
`;

export const EmailText = styled.span`
  font-weight: 300;
`;

export const EmailInput = styled.input`
  ${InputStyle}
`;

export const PasswordContainer = styled.div`
  width: 70%;
  margin-bottom: 10px;
`;

export const PasswordText = styled.span`
  font-weight: 300;
`;

export const PasswordInput = styled.input`
  ${InputStyle}
`;

export const CheckBoxContainer = styled.div`
  width: 70%;
  margin-bottom: 15px;
`;

export const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  margin: 0 5px 0 0;
`;

export const CheckBoxText = styled.span`
  overflow-wrap: normal;
`;

export const SignUpBtn = styled.input`
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
