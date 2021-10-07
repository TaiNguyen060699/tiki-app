import React from "react";
import "./index.scss";
import Header from "../Header";
import UniqueSaleBook from "../UniqueSaleBooks";
import SuperSaleBook from "../SuperSaleBooks";
import FlashSaleBook from "../FlashSaleBooks";
import Banner from "../BannerBlock";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="homepage">
        <Banner />
        <UniqueSaleBook />
        <SuperSaleBook />
        <FlashSaleBook />
      </main>
    </>
  );
};

export default HomePage;
