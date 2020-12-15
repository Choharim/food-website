import styled from "styled-components";

export const MainBg = styled.div`
  background-color: #fde7e7;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 3rem;
  text-transform: uppercase;
  margin: 0 auto;
`;

export const SlideContainer = styled.div`
  position: relative;
`;

export const SlideBtn = styled.div`
  width: 120px;
  border-bottom: 3px solid black;
  position: absolute;
  top: 80%;
  right: ${(props) => {
    if (props.right) {
      return "-80px";
    }
  }};
  left: ${(props) => {
    if (props.left) {
      return "-80px";
    }
  }};
`;

export const ImgContainer = styled.div`
  height: 650px;
  width: 500px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export const SlideImg = styled.img`
  width: 650px;
`;
