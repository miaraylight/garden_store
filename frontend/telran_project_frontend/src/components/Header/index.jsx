import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import Modal from "../Modal";
import Logo from "../Logo";

export default function Header() {
  const { product, basket } = useSelector((state) => state);
  const basketCount = basket.list.reduce((acc, { count }) => acc + count, 0);
  const data = basket.list.map((item) => {
    const target = product.list.find(({ id }) => item.id === id);
    return { ...target, ...item };
  });

  const sideMenuData = [
    { title: "catalog", to: "/categories", icon: "layers" },
    { title: "shop", to: "/product/all", icon: "local_mall" },
    { title: "sale", to: "/product/sale", icon: "stars" },
    { title: "home", to: "/", icon: "home" },
    { title: "contact", to: "/contact", icon: "location_on" },
    { title: "cart", to: "/basket", icon: "shopping_cart" },
  ];
  const subtotal = data.reduce((acc, item) => acc + item.price * item.count, 0);

  const [modalActive, setModaleActive] = useState([false]);

  return (
    <div>
      <div className={s.container}>
        <button
          className={s.burger_btn}
          onClick={() => {
            setModaleActive(["nav", true]);
          }}
        >
          <span className="material-icons">dehaze</span>
        </button>
        <Logo />
        <div className={s.main_links}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active_link : s.link)}
            to="/categories"
          >
            Catalog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active_link : s.link)}
            to="/product/all"
          >
            Shop all
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active_link : s.link)}
            to="/product/sale"
          >
            On sale
          </NavLink>
        </div>

        <div className={s.secondary_links}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active_link : s.link)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? s.active_link : s.link)}
            to="/contact"
          >
            Contact
          </NavLink>
          <button
            data-count={basketCount === 0 ? null : basketCount}
            className={s.link_basket}
            onClick={() => {
              setModaleActive(["basket", true]);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/basket-icon.png"}
              alt="basket-icon"
            />
          </button>
        </div>
      </div>
      <div>
        <Modal
          activeModal={modalActive}
          setActive={setModaleActive}
          list={sideMenuData}
          data={data}
          subtotal={subtotal}
        />
      </div>
    </div>
  );
}
