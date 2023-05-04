import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/ProductItem';
import s from './style.module.css'

export default function ProductPage() {
  const { category, sale } = useParams()

  const products = useSelector(state => {
    if (sale !== undefined) {
      return state.product.list.filter(({discont_price}) => discont_price !== null)  
    }else if (category !== undefined) {
      return state.product.list.filter(({categoryId})=> +categoryId === +category)
    }
    return state.product.list
  }
  )


  return (
    <div className={s.container}>
      {
        products.map(item => <ProductItem key={item.id} {...item}/>)
      }
    </div>
  )
}
