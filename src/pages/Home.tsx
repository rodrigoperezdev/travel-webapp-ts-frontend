import React from "react";
import { SearchCarousel } from "../components/section/SearchCarousel";
import { CategoryCarousel } from "../components/section/CategoryCarousel";
import { SearchForm } from "../components/section/SearchForm";

export const Home: React.FC = () => {
  return (
    <>
      <SearchCarousel />
      <SearchForm />
      <CategoryCarousel />
    </>
  );
};
