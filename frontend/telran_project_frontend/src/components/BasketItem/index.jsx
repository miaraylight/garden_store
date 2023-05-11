import React from 'react'
import s from './style.module.css'

export default function BasketItem({id, title, price, final_price, count, image}) {
  return (
    <div>
        <div className={s.image}>
            <img src="" alt="" />
        </div>
        <div className={s.price_block}>
            <p className={s.price}></p>
            <p className={s.final_price}>{final_price}</p>
        </div>
        
        <div>
            <button className={s.minus}>-</button>
            <p className={s.count}>{count}</p>
            <button className={s.minus}>+</button>
        </div>
        <p className={s.subtotal}></p>
        <button className={s.delete}>U+02715</button>
    </div>
  )
}
