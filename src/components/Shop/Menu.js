import React, { useState } from "react";
import {
  ItemsContainer,
  ItemContainer,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemDesc,
  ItemDescBtn,
} from "./MenueElements";

const Menu = ({ menuItems }) => {
  const [moreDesc, setMoreDesc] = useState(false);
  const [clickedProduct, setClickedProduct] = useState();

  const clickedDescBtn = (event) => {
    const {
      target: { name },
    } = event;

    setClickedProduct(name);
    setMoreDesc(!moreDesc);
  };

  return (
    <ItemsContainer>
      {menuItems.map((item, index) => {
        const { id, product, category, price, img, desc } = item;
        return (
          <ItemContainer key={id} category={category}>
            <ItemImg src={img} alt={product}></ItemImg>
            <ItemInfo>
              <ItemName>{product}</ItemName>
              <ItemPrice>{price}</ItemPrice>
              <ItemDescBtn name={product} onClick={clickedDescBtn}>
                {moreDesc && clickedProduct === product ? "닫기" : "더보기"}
              </ItemDescBtn>
              {moreDesc && clickedProduct === product ? (
                <ItemDesc>{desc}</ItemDesc>
              ) : null}
            </ItemInfo>
          </ItemContainer>
        );
      })}
    </ItemsContainer>
  );
};

export default Menu;
