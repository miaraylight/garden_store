import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { basketItemDecrement, basketItemIncrement, deleteItemFromBasket } from '../../store/slice/basketSlice'
import { Link } from 'react-router-dom'

export default function BasketItem({id, title, price, final_price, count, image}) {
    const dispatch = useDispatch()
    const subtotal = count * price
    return (
    <div className={s.basketItem_wrapper}>
        <Link to={`/product/item/${id}`}>
            <div className={s.basketItem_image}>
                <img src={`http://localhost:3333${image}`} alt="product" />
            </div>
            <p className={s.basketItem_title}>{title}</p>  
        </Link>
        <div className={s.basketItem_priceBlock}>
            <p className={s.price}>${price}</p>
            <p className={s.final_price}>${final_price}</p>
        </div>
        <div className={s.basketItem_toolbar}>
            <button onClick={()=>dispatch(basketItemDecrement(id))}>&#8211;</button>
            <p>{count}</p>
            <button onClick={()=>dispatch(basketItemIncrement(id))}>+ </button>
        </div>
        <p className={s.basketItem_subtotal}>${subtotal}</p>
        <button className={s.basketItem_deleteBtn} onClick={()=>dispatch(deleteItemFromBasket(id))}>&#10005;</button>
    </div>
  )
}
