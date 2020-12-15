import styled, { keyframes } from "styled-components";

export const MainBg = styled.div`
  background-color: #fde7e7;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const movePage = keyframes`
 from {bottom: 35%;}
  to {bottom: 16%;}
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${movePage} 2s ease 0.6s forwards;
  bottom: 35%;
`;

const ChangeFontSize = keyframes`
from {
  font-size: 15rem;
  bottom: 0;}
 to {
  font-size: 3.5rem;
  bottom: 13%;}
`;

export const MainHeader = styled.h1`
  font-family: "Dancing Script", cursive;
  text-transform: uppercase;
  position: relative;
  animation: ${ChangeFontSize} 3s ease 0.6s forwards;
  font-size: 15rem;
  z-index: 10;
`;

export const SlideContainer = styled.div`
  position: relative;
`;

export const SlideBtn = styled.button`
  outline: none;
  border: none;
  border-bottom: 3px solid black;
  cursor: pointer;
  width: 120px;
  padding: 10px;
  background-color: Transparent;
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

export const Slide = styled.div`
  opacity: ${(props) => (props.condition === "slideActive" ? 1 : 0)};
  transition-duration: ${(props) =>
    props.condition === "slideActive" ? "1s" : "1s ease"};
  transform: ${(props) =>
    props.condition === "slideActive" ? "scale(1.08)" : null};
`;

export const SlideImg = styled.img`
  width: 650px;
  height: 100%;
`;
