import { Link } from "react-router-dom";
import styled from "styled-components";
import shopBg from "../../images/shopBg.webp";

export const ShopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${shopBg});
  background-size: cover;
  display: flex;
`;

export const ProductsContainer = styled.div`
  width: 70%;
  background-color: #fde7e7;
`;

export const CategoriesContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LoginIcon = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  position: absolute;
  top: 18px;
  left: 20px;

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;

export const CartIcon = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  left: 120px;

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
`;
export const ExitBtn = styled(Link)`
  color: white;
  font-size: 2rem;
  padding: 5px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
