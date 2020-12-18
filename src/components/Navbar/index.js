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
  LogOut,
} from "./NavbarElements";
import { MdPets } from "react-icons/md";
import { GrChat } from "react-icons/gr";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ logIn, setLogIn, signUp, setSignUp }) => {
  const logInOutToggel = () => {
    setLogIn(false);
    setSignUp(false);
  };

  return (
    <>
      <NavbarContainer>
        <MenuContainer>
          <MenuDogIcon>
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
          {logIn && signUp ? (
            <LogOut onClick={logInOutToggel}>Log Out</LogOut>
          ) : (
            <Login to="/auth">Log In</Login>
          )}
        </MenuContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
