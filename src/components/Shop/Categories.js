import React from "react";
import { ShopIcon, AllBtn, DishBtn, SnackBtn } from "./CategoriesElements";

const Categories = ({ filterItems }) => {
  return (
    <>
      <ShopIcon>Shop</ShopIcon>
      <AllBtn onClick={() => filterItems("all")}>All</AllBtn>
      <DishBtn onClick={() => filterItems("자연식")}>수제 자연식</DishBtn>
      <SnackBtn onClick={() => filterItems("간식")}>수제 간식</SnackBtn>
    </>
  );
};

export default Categories;
