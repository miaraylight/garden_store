import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({id, title, image}) {
  const link = `/categories/${id}`
  return (
    <Link to={link}>
      <div className={s.card}>
          <div className={s.card_image}>
            <img src={`http://localhost:3333/${image}`} alt="category" />
          </div>
          <div className={s.card_title}>{title}</div>
      </div>
    </Link>
    
  )
}
