import React from 'react'
import s from './style.module.css'

export default function CategoryItem({id, title, image}) {
  console.log(title);
  return (
    <div className={s.card}>
        <img className={s.card_image} src={`http://localhost:3333/${image}`} alt="category" />
        <div className={s.card_title}>{title}</div>
    </div>
  )
}
