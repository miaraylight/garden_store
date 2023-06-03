import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";
import Modal from "../Modal";
import Logo from "../Logo";
import BasketItem from "../../components/BasketItem";
import MainButton from "../MainButton";

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

  const [modalActive, setModaleActive] = useState(["", false]);

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <button
          className={s.burger_btn}
          onClick={() => {
            setModaleActive(["Menu", true]);
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
              setModaleActive(["Shopping cart", true]);
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
          appearance={modalActive[0] === "Shopping cart" ? 'right' : 'left'}
          title={modalActive[0]}
        >
          <div>
            <table>
              <tbody>
                {modalActive[0] === "Menu"
                  ? sideMenuData.map(({ title, icon, to }) => (
                      <tr key={title} className={s.menu_wrapper}>
                        <td className={s.menu_icon}>
                          <span className="material-icons">{icon}</span>
                        </td>
                        <td
                          onClick={() => setModaleActive(["", false])}
                          className={s.menu_title}
                        >
                          <NavLink to={to}>{title}</NavLink>
                        </td>
                      </tr>
                    ))
                  : data.length === 0 
                    ? <tr ><td className={s.basket_empty}>Your cart is currently empty</td></tr> 
                    : data.map((elem) => (<BasketItem key={elem.id} {...elem} modal={true} />
                    ))}
              </tbody>
            </table>
            <div
              className={s.modal_basket_options}
              style={
                modalActive[0] === "Menu"
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              <div className={s.modal_basket_total}>
                <p>Subtotal:</p>
                <p>{subtotal}$</p>
              </div>

              <Link to="/basket" onClick={() => setModaleActive(["", false])}>
                <MainButton children={"view cart"} />
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
