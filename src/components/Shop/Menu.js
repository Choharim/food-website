import React from "react";
import { ItemsContainer, ItemContainer, ItemImg } from "./MenueElements";

const Menu = ({ menuItems }) => {
  return (
    <ItemsContainer>
      {menuItems.map((item) => {
        const { id, product, category, price, img, desc } = item;
        return (
          <ItemContainer key={id}>
            <ItemImg src={img} alt={product}></ItemImg>
          </ItemContainer>
        );
      })}
    </ItemsContainer>
  );
};

export default Menu;
