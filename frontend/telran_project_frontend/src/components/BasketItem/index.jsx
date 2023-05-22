import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { basketItemDecrement, basketItemIncrement, deleteItemFromBasket } from '../../store/slice/basketSlice'
import { Link } from 'react-router-dom'

export default function BasketItem({id, title, price, final_price, count, image, modal}) {
    const dispatch = useDispatch()
    const subtotal = (count * price).toFixed(2)
    return (
        <tr className={s.basketItem_wrapper}>
            <td >
                <div className={s.basketItem_image}>
                    <img src={`http://localhost:3333${image}`} alt="product" />
                </div>
            </td>
            <td data-label="Product:">
                <Link to={`/product/item/${id}`}>
                    <p className={s.basketItem_title}>{title}</p>
                </Link>
            </td>
            <td data-label="Price:">{final_price}</td>
            <td data-label="Quantity:">
                <div className={s.basketItem_toolbar} style={modal ? { display: 'none' } : { display: 'flex' }}>
                <button onClick={() => dispatch(basketItemDecrement(id))}>&#8211;</button>
                <p>{count}</p>
                <button onClick={() => dispatch(basketItemIncrement(id))}>+ </button>
            </div></td>
            <td data-label="Subtotal:"><span className={s.subtotal}>{subtotal}</span></td>
            <td>
                <button className={s.basketItem_deleteBtn} onClick={() => dispatch(deleteItemFromBasket(id))}>&#10005;</button>
            </td>
        </tr>
  )
}
