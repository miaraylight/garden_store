import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css'

export default function MainPage() {
  
  const categories = useSelector(state => state.category)
  

  return (
    <div>
      <div className={s.banner}>
        <h3>Sale</h3>
        <p>New season</p>
        <button>Sale</button>
      </div>
      <div className={s.main_categories}>
        <div className={s.categories_top}>
          <h3>Catalog</h3>
          <button>All categories</button>
        </div>
        <div className={s.categories_container}>
          {
            categories.map(item => <CategoryItem key={item.id} {...item}/>)
          }
        </div>
      </div>
      <div className={s.get_discount}>
        <h3>5% off on the first order</h3>
        <form className={s.discount_form}>
          <input type="text" />
          <button>Get a discount</button>
        </form>
      </div>
      <div>
        {
          'sales'
        }
      </div>
    </div>
  )
}
