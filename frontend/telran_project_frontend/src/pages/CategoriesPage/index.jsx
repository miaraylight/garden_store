import React from 'react'
import s from './style.module.css'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'

export default function CategoriesPage() {
  const categories = useSelector(state => state.category)

  return (
    <div className={s.container}>
      {
        categories.map(item => <CategoryItem key={item.id} {...item}/>)
      }
    </div>
  )
}
