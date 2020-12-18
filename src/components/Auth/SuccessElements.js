import styled from "styled-components";
import successBg from "../../images/successBg.webp";

export const SuccessContainer = styled.div`
  height: 45%;
  width: 70%;
  border-radius: 30px;
  background-image: url(${successBg});
  background-size: contain;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

export const SuccessGreeting = styled.span`
  font-family: "Dancing Script", cursive;
  color: white;
  font-size: 3.3rem;
  margin-top: 10px;
`;
