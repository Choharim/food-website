import React, { useState } from "react";
import Navbar from "../Navbar";
import { MainImgData } from "./MainImgData";
import {
  MainBg,
  MainContainer,
  MainHeader,
  SlideContainer,
  SlideBtn,
  ImgContainer,
  SlideImg,
} from "./MainElements";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const lenght = MainImgData.length;

  return (
    <MainBg>
      <Navbar />
      <MainContainer>
        <MainHeader>happy dog</MainHeader>
        <SlideContainer>
          <SlideBtn left />
          <SlideBtn right />
          <ImgContainer>
            {MainImgData.map((slide, index) => {
              return <SlideImg key={index} src={slide.image} alt="food" />;
            })}
          </ImgContainer>
        </SlideContainer>
      </MainContainer>
    </MainBg>
  );
};

export default Main;
