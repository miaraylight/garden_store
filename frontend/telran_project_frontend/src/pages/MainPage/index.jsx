import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/CategoryItem'

import s from './style.module.css'
import ProductItem from '../../components/ProductItem'
import Banner from '../../components/Banner'
import GetDiscountForm from '../../components/GetDiscountForm'
import { Link } from 'react-router-dom'

export default function MainPage() {
  const categories = useSelector(state => state.category.list)
  const productsOnSale = useSelector(state => state.product.list.filter(({discont_price})=> discont_price !== null))
  
  return (
    <div className={s.container}>
      <Banner/>
      <div className={s.main_element}>
        <Link to={'/categories'}>Categories</Link>
        <h3>Some header text</h3>
        <div className={s.categories_container}>
          {
            categories.map(item => <CategoryItem key={item.id} {...item}/>)
          }
        </div>
      </div>
      <div className={s.main_element}>
        <Link to={'/product/sale'}>Sale</Link>
        <h3>Some header text</h3>
        <div className={s.sales_container}>
        {
          productsOnSale.map(item => <ProductItem key={item.id} {...item}/>)
        }
      </div>
      </div>
      
    </div>
  )
}
