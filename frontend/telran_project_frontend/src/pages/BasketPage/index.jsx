import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import BasketItem from '../../components/BasketItem'
import { toast } from 'react-toastify'

export default function BasketPage() {
  const { product, basket} = useSelector(state => state)

  const data = basket.list.map(item => {
    const target = product.list.find(({id}) => item.id === id)
    return {...target, ...item}
  })

  const subtotal = data.reduce((acc, item) => acc + item.price * item.count, 0)
  let total = data.reduce((acc, item) => acc + item.final_price * item.count, 0).toFixed(2)
  
  const onClickHandler = async() => {
    try {
      const responce = await fetch('http://localhost:3333/order/send', {
        method: 'POST',
        headers: {
          Accept: data
        }
      })
      if (responce.ok) {
        const jsonResponse = await responce.json()
        console.log(jsonResponse);
        toast.promise(
          () => Promise.resolve(jsonResponse),
          {
            pending: 'Order is processing...',
            success: 'Order completed successfully!',
          }
        );
      }
    } catch (error) {
      console.log(error);
      toast.promise(
        () => Promise.reject(error),
        {
          error: 'Something went wrong'
        }
      );
    }
  }

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
            <button className={s.basket_checkout} onClick={onClickHandler}>Order</button>
          </div>

        </div>
      </div>
    </div>
  )
}
