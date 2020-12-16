import React, { useState } from "react";
import { HeroImgData } from "./HeroImgData";
import {
  MainBg,
  MainContainer,
  MainHeader,
  SlideContainer,
  SlideBtn,
  ImgContainer,
  Slide,
  SlideImg,
} from "./HeroElements";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const DataCount = HeroImgData.length;

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

  if (!Array.isArray(HeroImgData) || DataCount <= 0) {
    return null;
  }

  return (
    <MainBg>
      <MainHeader>happy dog</MainHeader>
      <MainContainer>
        <SlideContainer>
          <SlideBtn left onClick={preSlide} />
          <SlideBtn right onClick={nextSlide} />
          <ImgContainer>
            {HeroImgData.map((slide, index) => {
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
