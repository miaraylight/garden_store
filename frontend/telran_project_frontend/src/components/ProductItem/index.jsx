import React from 'react'
import s from './style.module.css'

export default function ProductItem({id, title, price, discont_price, image,}) {
  return (
    <div className={s.card}>
        <div className={s.card_img}>
            <img src={`http://localhost:3333/${image}`} alt="product" />
            <button>Add to cart</button>
        </div>
        <div className={s.card_price}>
            <p className={s.dicount_price}>{discont_price}</p>
            <p className={s.price}>{price}</p>
            <p className={s.discount_percentage}>{((price - discont_price) * 100 / price).toFixed(1)}%</p>
        </div>
        <div className={s.card_title}>{title}</div>
    </div>
  )
}
