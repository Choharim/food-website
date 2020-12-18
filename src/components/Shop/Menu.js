import React from "react";
import {
  ItemsContainer,
  ItemContainer,
  ItemImg,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemDesc,
} from "./MenueElements";

const Menu = ({ menuItems }) => {
  return (
    <ItemsContainer>
      {menuItems.map((item) => {
        const { id, product, category, price, img, desc } = item;
        return (
          <ItemContainer key={id} category={category}>
            <ItemImg src={img} alt={product}></ItemImg>
            <ItemInfo>
              <ItemName>{product}</ItemName>
              <ItemPrice>{price}</ItemPrice>
              <ItemDesc>{desc}</ItemDesc>
            </ItemInfo>
          </ItemContainer>
        );
      })}
    </ItemsContainer>
  );
};

export default Menu;
