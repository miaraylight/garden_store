import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import s from './style.module.css'

export default function ProductDescriptionPage() {
    const { productId } = useParams()
    const product = useSelector(state => state.product.list.find(({id}) => id === +productId))
    const { id, title, price, discont_price, image, description } = product;
  return (
    <div className={s.container}>
        <h1>{title}</h1>
        <div className={s.content}>
            <div className={s.img_wrapper}>
                <img src={`http://localhost:3333/${image}`} alt="product" />
            </div>
            <div className={s.info_wrapper}>
                {
                discont_price === null 
                ? <div className={s.card_price}>
                    <p className={price}>{price}</p>
                    </div>
                : <div className={s.card_price}>
                    <p className={s.dicount_price}>{discont_price}<span>$</span></p>
                    <p className={s.throughed_price}>{price}$</p>
                    <p className={s.discount_percentage}>-{((price - discont_price) * 100 / price).toFixed(1)}<span>%</span></p>
                    </div>
                }
                <button className={s.add_button}>Add</button>
                <p className={s.descr}><span className={s.descr_span}>Description:</span>{description}</p>
            </div>
        </div>
    </div>
  )
}
