import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ShopData } from "./ShopData";
import {
  ShopContainer,
  ProductsContainer,
  CategoriesContainer,
  LoginIcon,
  CartIcon,
  ExitBtn,
} from "./ShopElements";

const Shop = () => {
  const [menuItems, setMenuItems] = useState(ShopData);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(ShopData);
      return;
    }
    const newItems = ShopData.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <ShopContainer>
      <ProductsContainer>
        <Menu menuItems={menuItems} />
      </ProductsContainer>
      <CategoriesContainer>
        <Categories filterItems={filterItems} />
      </CategoriesContainer>
      <LoginIcon to="/auth">LOG IN</LoginIcon>
      <CartIcon to="/cart">
        <FiShoppingCart />
      </CartIcon>
      <ExitBtn to="/">
        <AiOutlineClose />
      </ExitBtn>
    </ShopContainer>
  );
};

export default Shop;
