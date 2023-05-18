import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function CategoryItem({id, title, image}) {
  const link = `/categories/${id}`
  const productsInCategory = useSelector(state => state.product.list.filter(({ categoryId }) => +categoryId === +id).length)
  return (
    <Link to={link}>
      <div className={s.category_card}>
          <div className={s.card_image_wrapper}>
            <img className={s.card_image} src={`http://localhost:3333/${image}`} alt="category" />
            <div className={s.card_title}>
              <p>{title}</p>
              <span>{productsInCategory} products</span>
            </div> 
          </div>
           
      </div>
    </Link>
    
  )
}
