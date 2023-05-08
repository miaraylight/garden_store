import React from 'react'
import s from './style.module.css'

export default function GetDiscountForm() {
  return (
    <div className={s.container}>
      <div className={s.content_wrapper}>
        <div className={s.form_wrapper}>
          <h3>5% off on the first order</h3>
          <form className={s.discount_form}>
            <input type="text" placeholder='+49' />
            <button>Get a discount</button>
          </form>
        </div>
        <div className={s.image_wrapper}>
          <img src={process.env.PUBLIC_URL + '/images/discount-card-img.jpg'} alt="discount_card" />
        </div>
      </div>

    </div>
  )
}
