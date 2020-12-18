import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ShopData } from "./ShopData";
import {
  ShopContainer,
  ProductsContainer,
  LoginIcon,
  CartIcon,
  ExitBtn,
} from "./ShopElements";

const Shop = () => {
  const [menuItems, setMenuItems] = useState(ShopData);
  const [categories, setCategories] = useState([]);

  return (
    <ShopContainer>
      <ProductsContainer>
        <Menu menuItems={menuItems} />
      </ProductsContainer>
      <LoginIcon to="/auth">LOG IN</LoginIcon>
      <CartIcon to="/cart">
        <FiShoppingCart />
      </CartIcon>
      <ExitBtn>
        <AiOutlineClose />
      </ExitBtn>
    </ShopContainer>
  );
};

export default Shop;
