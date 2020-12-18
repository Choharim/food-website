import React from "react";
import { ShopIcon, AllBtn, DishBtn, SnackBtn } from "./CategoriesElements";

const Categories = ({ filterItems }) => {
  return (
    <>
      <ShopIcon>Shop</ShopIcon>
      <AllBtn>All</AllBtn>
      <DishBtn>수제 자연식</DishBtn>
      <SnackBtn>수제 간식</SnackBtn>
    </>
  );
};

export default Categories;
