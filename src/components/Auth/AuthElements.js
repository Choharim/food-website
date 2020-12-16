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
