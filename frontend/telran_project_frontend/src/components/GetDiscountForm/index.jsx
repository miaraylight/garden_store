import React from 'react'
import s from './style.module.css'

export default function GetDiscountForm() {
  return (
    <div className={s.container}>
        <div className={s.image_wrapper}>
          <img src={process.env.PUBLIC_URL + '/images/discount_background.png'} alt="" />
        </div>
        <div className={s.form_wrapper}>
          <h3>5% off<span className={s.span}>on the first order</span></h3>
          <form className={s.discount_form}>
            <input type="text" placeholder='+49'/>
            <button>Get a discount</button>
          </form>
        </div>
      </div>
  )
}
