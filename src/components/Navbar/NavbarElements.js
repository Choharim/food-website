import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const ChangeColor = css`
  &:visited {
    color: black;
  }
`;

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuDogIcon = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  padding: 5px;

  ${ChangeColor}
`;

export const MenuShop = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  ${ChangeColor}
`;

export const MenuAbout = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;

  ${ChangeColor}
`;

export const MenuChatIcon = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;

  ${ChangeColor}
`;

export const MenuCartIcon = styled(Link)`
  text-decoration: none;
  font-size: 1.8rem;

  ${ChangeColor}
`;

export const Login = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;

  ${ChangeColor}
`;
