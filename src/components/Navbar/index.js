import React, { useState } from "react";
import {
  NavbarContainer,
  MenuContainer,
  MenuDogIcon,
  MenuShop,
  MenuAbout,
  MenuChatIcon,
  MenuCartIcon,
  Login,
} from "./NavbarElements";
import { MdPets } from "react-icons/md";
import { GrChat } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [logIn, setLogIn] = useState(false);

  return (
    <>
      <NavbarContainer>
        <MenuContainer>
          <MenuDogIcon to="/">
            <MdPets />
          </MenuDogIcon>
          <MenuShop to="/shop">shop</MenuShop>
          <MenuAbout to="/about">about</MenuAbout>
        </MenuContainer>
        <MenuContainer>
          <MenuChatIcon>
            <GrChat />
          </MenuChatIcon>
          <MenuCartIcon to="/mycart">
            <FiShoppingCart />
          </MenuCartIcon>
          <Login to="/auth">Log In</Login>
        </MenuContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
