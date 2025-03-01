import React from "react";
import Header from "../components/header";
import HomeBody from "../components/homeBody";
import Categories from "../components/categories";

function home() {
  return (
    <div>
      <Header />
      <HomeBody />
      <Categories />
    </div>
  );
}

export default home;
