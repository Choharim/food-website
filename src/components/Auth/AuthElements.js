import styled from "styled-components";
import BgImg from "../../images/authBg.webp";

export const BgImage = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${BgImg});
`;
