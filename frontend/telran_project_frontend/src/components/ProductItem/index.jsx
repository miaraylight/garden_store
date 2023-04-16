import React from 'react'
import s from './style.module.css'

export default function ProductItem({id, title, price, discont_price, image,}) {
  return (
    <div className={s.card}>
        <div className={s.card_img}>
            <img src={image} alt="" />
            <button>Add to cart</button>
        </div>
        <div className={s.card_price}>
            <p>{price}</p>
        </div>
        <div className={s.card_title}>{title}</div>
    </div>
  )
}
