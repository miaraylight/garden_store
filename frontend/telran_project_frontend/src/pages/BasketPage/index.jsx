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
  console.log(data);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Cart</h1>
      <div className={s.basket}>
        <div className={s.basket_items_block}>
          <div className={s.basket_items_header}></div>
          <div className={s.basket_items}>
            {
              data.map(item => <BasketItem key={item.id} {...item}/>)
            }
          </div>
        </div>
        <div className={s.basket_total_block}>
          <div className={s.basket_total_header}></div>
        </div>
      </div>
    </div>
  )
}
