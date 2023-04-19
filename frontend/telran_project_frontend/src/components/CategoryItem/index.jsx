import React from 'react'
import s from './style.module.css'

export default function CategoryItem({id, title, image}) {
  
  return (
    <div className={s.card}>
        <div className={s.card_image}>
          <img src={`http://localhost:3333/${image}`} alt="category" />
        </div>
        <div className={s.card_title}>{title}</div>
    </div>
  )
}
