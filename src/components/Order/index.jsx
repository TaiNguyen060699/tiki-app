import React from "react";
import Wifi from "../../assets/images/order/wifi.svg";
import Reception from "../../assets/images/order/reception.svg";
import Battery from "../../assets/images/order/battery.svg";
import "./index.scss";
import OrderDetail from "../OrderDetail";

const Order = () => {
  return (
    <>
      <HeaderOrder />
      <OrderDetail />
    </>
  );
};

const HeaderOrder = () => {
  return (
  <header className="header-order">
    <div className="header-order__status-bar">
      <img src={Wifi} alt="wifi" />
      <img src={Reception} alt="reception" />
      <img src={Battery} alt="battery" />
      <span>12:30</span>
    </div>
    <div className="header-order__title">Giỏ hàng</div>
  </header>
  )
};

export default Order;
