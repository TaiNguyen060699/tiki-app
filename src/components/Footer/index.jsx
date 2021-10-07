import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink
        exact
        to="/"
        className="footer__iconmoon"
        activeClassName="active"
      >
        <div className="icon-home"></div>
        <span>Trang chủ</span>
      </NavLink>
      <NavLink
        to="/order"
        className="footer__iconmoon "
        activeClassName="active"
      >
        <div className="icon-live-area"></div>
        <span>Giỏ hàng</span>
      </NavLink>
    </footer>
  );
}

export default Footer;
