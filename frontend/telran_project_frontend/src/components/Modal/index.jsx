import React from 'react'
import s from './style.module.css'
import BasketItem from '../../components/BasketItem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'

export default function Modal({ activeModal, setActive, list}) {
    const { product, basket } = useSelector(state => state)

    const data = basket.list.map(item => {
        const target = product.list.find(({ id }) => item.id === id)
        return { ...target, ...item }
    })

    const subtotal = data.reduce((acc, item) => acc + item.price * item.count, 0)
    return (
        <div
            className={activeModal ? s.modal_active : s.modal}
            onClick={() => setActive(false)}
            >
            <div
                className={activeModal ? s.modal_content_active : s.modal_content}
                onClick={e => e.stopPropagation()}>
                <div className={s.modal_basket_header}>
                    <h1>Shopping cart</h1>
                    <button onClick={() => setActive(false)}>&#10005;</button>
                </div>
                <div className={s.modal_basket_items}>
                    <table>
                        <tbody>
                         {
                            data.map(item => <BasketItem key={item.id} {...item} modal={true} />)
                         }
                        </tbody>
                    </table>
                </div>
                <div className={s.modal_basket_total}>
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <Link to='/basket'>
                   <MainButton children={'view cart'}/>
                </Link>
                
            </div>
        </div>
    )
}
