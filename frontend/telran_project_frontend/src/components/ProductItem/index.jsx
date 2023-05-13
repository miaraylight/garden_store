import React, { useState } from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { addItemToBasket } from "../../store/slice/basketSlice";
import { useDispatch } from 'react-redux'

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  image,
}) {
  
  const link = `/product/item/${id}`;
  const [toggleBasketBtn, setToggleBasketBtn] = useState({ display: "none" });
  const [togglePopUp, setTogglePopUp] = useState({ display: "none" });
  const dispatch = useDispatch()
  
  return (
    <div className={s.product_card}>
      <div 
      className={s.card_img_block}
      onMouseEnter={(e) => {
        setToggleBasketBtn({ display: "flex" });
      }}
      onMouseLeave={(e) => {
        setToggleBasketBtn({display: "none"})
      }}
      >
        <div className={s.card_top}>
          <span
            className={s.discount_percentage}
            style={
              discont_price === null
                ? { display: "none" }
                : { display: "block" }
            }
          >
            -{(((price - discont_price) * 100) / price).toFixed(1)}%
          </span>
          <div className={s.card_toolbar} >
            <button 
            className={s.basket}
            onMouseEnter={(e) => {
              setTogglePopUp({ display: "flex" });
            }}
            onMouseLeave={(e) => {
              setTogglePopUp({display: "none"})
            }}
            >
              <span className={s.basket_pop_up} 
              style={togglePopUp}
              >Add to cart</span>
              <div 
              className={s.basket_btn} 
              style={toggleBasketBtn}
              onClick={()=>dispatch(addItemToBasket({product_id: id}))}
              >
                <img 
                  src={process.env.PUBLIC_URL + "/images/basket-icon.png"}
                  alt="basket-icon"
              />
              </div>
              
            </button>
          </div>
        </div>
        <div className={s.card_img} >
          <img
          src={`http://localhost:3333/${image}`}
          alt="product"
        />
        </div>
        
      </div>

      <Link to={link}>
        <div className={s.card_content_block}>
          <p className={s.card_title}>{title}</p>
          <div className={s.card_price_block}>
            <p className={s.price}>${price}</p>
            <p className={s.dicount_price}>${discont_price}</p>
            
          </div>
        </div>
      </Link>
    </div>
  );
}
