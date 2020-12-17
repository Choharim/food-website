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
  const userInfo_LS = localStorage.getItem("currentUser");

  if (JSON.parse(userInfo_LS) !== null) {
    setLogIn(true);
  }

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
          <Login to={logIn ? "/" : "/auth"}>
            {logIn ? "Log Out" : "Log In"}
          </Login>
        </MenuContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
