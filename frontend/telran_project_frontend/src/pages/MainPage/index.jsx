import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'

import s from './style.module.css'
import ProductItem from '../../components/ProductItem'
import Banner from '../../components/Banner'
import GetDiscountForm from '../../components/GetDiscountForm'

export default function MainPage() {
  const categories = useSelector(state => state.category.list)
  const productsOnSale = useSelector(state => state.product.list.filter(({discont_price})=> discont_price !== null))
  
  return (
    <div>
      <Banner/>
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
      <GetDiscountForm/>
      <div className={s.sales_container}>
        {
          productsOnSale.map(item => <ProductItem key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}
