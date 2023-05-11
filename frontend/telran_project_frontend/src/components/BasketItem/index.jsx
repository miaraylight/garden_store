import React from 'react'
import s from './style.module.css'

export default function BasketItem({id, title, price, final_price, count, image}) {
    const subtotal = count * final_price
    return (
    <div className={s.basketItem_wrapper}>
        <div className={s.basketItem_image}>
            <img src={`http://localhost:3333${image}`} alt="product" />
        </div>
        <p className={s.basketItem_title}>{title}</p>
        <div className={s.basketItem_priceBlock}>
            <p className={s.price}>${price}</p>
            <p className={s.final_price}>${final_price}</p>
        </div>
        
        <div className={s.basketItem_toolbar}>
            <button>-</button>
            <p>{count}</p>
            <button>+
            </button>
        </div>
        <p className={s.basketItem_subtotal}>${subtotal}</p>
        <button className={s.basketItem_deleteBtn}>&#10005;</button>
    </div>
  )
}
