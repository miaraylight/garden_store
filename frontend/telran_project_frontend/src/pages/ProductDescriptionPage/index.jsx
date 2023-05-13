import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import s from './style.module.css'

export default function ProductDescriptionPage() {
    const { productId } = useParams()
    const product = useSelector(state => state.product.list.find(({id}) => +id === +productId))
    const {id, title, price, discont_price, final_price, image, description } = product;
  return (
    <div className={s.container}>
        <div className={s.content}>
            <div className={s.product_item}>
               <div className={s.product_item_img}>
                    <img src={`http://localhost:3333/${image}`} alt="product" />
                </div>
                <div className={s.product_item_info}>
                    <h1>{title}</h1>
                    <div className={s.product_item_price_block}>
                        {
                        discont_price === null 
                        ? <div className={s.product_item_price}>
                            <p className={s.final_price}>{final_price}</p>
                            </div>
                        : <div className={s.product_item_price}>
                            <p className={s.throughed_price}>${price}</p>
                            <p className={s.final_price}>${final_price}</p>
                            <p className={s.discount_percentage}>-{((price - discont_price) * 100 / price).toFixed(1)}%</p>
                            </div>
                        }
                        <div className={s.product_item_toolbar}>
                            <div className={s.product_item_countbar}>
                                <button >-</button>
                                <p>1</p>
                                <button >+ </button>
                            </div>
                           <button className={s.product_item_addBtn}>Add to cart</button> 
                        </div>
                        <div className={s.product_item_payment}>
                            <p>Guaranteed safe checkout</p>
                            <div className={s.product_item_payment_img}>
                                <img src={process.env.PUBLIC_URL + '/images/visacard-icon.png'} alt="" />
                                <img src={process.env.PUBLIC_URL + '/images/mastercard-icon.png'} alt="" />
                                <img className={s.icon} src={process.env.PUBLIC_URL + '/images/american-express-icon.png'} alt="" />
                                <img className={s.icon}src={process.env.PUBLIC_URL + '/images/discover-icon.png'} alt="" />
                            </div>
                        </div>
                       <div className={s.product_item_payment_info}>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>No-Risk Money Back Qurantee</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>No Hassie Refunds</p>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"/></svg>Secure Payments</p>
                       </div>
                    </div>

                </div> 
            </div>
            <div className={s.product_descr}>
                <span className={s.descr_span}>Description</span>
                <p className={s.descr}>{description}</p>
            </div>
                        
        </div>
    </div>
  )
}
