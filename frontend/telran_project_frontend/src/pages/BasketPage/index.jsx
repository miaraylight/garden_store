import React from 'react'
import s from './style.module.css'

export default function BasketPage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Cart</h1>
      <div className={s.basket}>
        <div className={s.basket_items_block}>
          <div className={s.basket_items_header}></div>
        </div>
        <div className={s.basket_total_block}>
          <div className={s.basket_total_header}></div>
        </div>
      </div>
    </div>
  )
}
