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
  Slide,
  SlideImg,
} from "./MainElements";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const DataCount = MainImgData.length;

  const preSlide = () => {
    let currentSlide;
    if (current === 0) {
      currentSlide = DataCount - 1;
    } else {
      currentSlide = current - 1;
    }
    setCurrent(currentSlide);
  };

  const nextSlide = () => {
    let currentSlide;
    if (current === DataCount - 1) {
      currentSlide = 0;
    } else {
      currentSlide = current + 1;
    }
    setCurrent(currentSlide);
  };

  if (!Array.isArray(MainImgData) || DataCount <= 0) {
    return null;
  }

  return (
    <MainBg>
      <Navbar />
      <MainContainer>
        <MainHeader>happy dog</MainHeader>
        <SlideContainer>
          <SlideBtn left onClick={preSlide} />
          <SlideBtn right onClick={nextSlide} />
          <ImgContainer>
            {MainImgData.map((slide, index) => {
              return (
                <Slide condition={index === current ? "slideActive" : "slide"}>
                  {index === current && (
                    <SlideImg key={index} src={slide.image} alt="food" />
                  )}
                </Slide>
              );
            })}
          </ImgContainer>
        </SlideContainer>
      </MainContainer>
    </MainBg>
  );
};

export default Main;
