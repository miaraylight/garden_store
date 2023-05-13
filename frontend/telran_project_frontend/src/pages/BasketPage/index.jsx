import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem'

export default function BasketPage() {
  const { product, basket} = useSelector(state => state)

  const data = basket.list.map(item => {
    const target = product.list.find(({id}) => item.id === id)
    return {...target, ...item}
  })

  const subtotal = data.reduce((acc, item) => acc + item.price * item.count, 0)
  const total = data.reduce((acc, item) => acc + item.final_price * item.count, 0)
  return (
    <div className={s.container}>
      <h1 className={s.title}>Cart</h1>
      <div className={s.basket}>
        <div className={s.basket_items_block}>
          <div className={s.basket_items_header}>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className={s.basket_items}>
            {
              data.map(item => <BasketItem key={item.id} {...item}/>)
            }
          </div>
        </div>
        <div className={s.basket_total_block}>
          <div className={s.basket_total_header}>
            <p>Card totals</p>
          </div>
          <div className={s.basket_total_content}>
            <div className={s.basket_calculation}>
              <p>Subtotal</p>
              <span>${subtotal}</span>
            </div>
            <div className={s.basket_calculation}>
              <p>Total</p>
              <span>${total}</span>
            </div>
            <button className={s.basket_checkout}>Proceed to checkout</button>
          </div>

        </div>
      </div>
    </div>
  )
}
