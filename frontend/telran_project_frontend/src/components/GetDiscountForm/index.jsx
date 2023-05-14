import { useForm } from "react-hook-form";
import React from 'react'
import s from './style.module.css'

export default function GetDiscountForm() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmitHandler = async(data) => {
    try{
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: {
          Accept: data
        }
      })
      if (response.ok) {
        const jsonResponse = await response.json()
        console.log(jsonResponse.message);
      }
    }
    catch(error){
      console.log(error);
    }
    
    reset()
  }

  return (
    <div className={s.container}>
      <div className={s.content_wrapper}>
        <div className={s.form_wrapper}>
          <h3>5% off on the first order</h3>
          <form className={s.discount_form} onSubmit={handleSubmit(onSubmitHandler)}>
            <input 
            placeholder='+49' 
            {...register("number", {required: true, pattern: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g})}
            />
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
