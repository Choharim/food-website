import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ChangeColor = css`
  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

export const NavbarContainer = styled.nav`
  background-color: #fde7e7;
  width: 100vw;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuDogIcon = styled.div`
  font-size: 2.2rem;
  padding: 0 20px;
`;

export const MenuShop = styled(Link)`
  text-decoration: none;
  padding-right: 20px;

  ${ChangeColor}
`;

export const MenuAbout = styled(Link)`
  text-decoration: none;

  ${ChangeColor}
`;

export const MenuChatIcon = styled(Link)`
  text-decoration: none;
  padding-right: 25px;
  ${ChangeColor};
`;

export const MenuCartIcon = styled(Link)`
  text-decoration: none;
  padding-right: 25px;

  ${ChangeColor}
`;

export const Login = styled(Link)`
  text-decoration: none;
  padding-right: 40px;

  ${ChangeColor}
`;

export const LogOut = styled.button`
  padding-right: 40px;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
