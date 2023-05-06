import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductItem from '../../components/ProductItem';
import s from './style.module.css'
import FilterBar from '../../components/FilterBar';

export default function ProductPage() {
  const { category, sale } = useParams()

  let header;

  const products = useSelector(state => {
    if (sale !== undefined) {
      header = "Sale"
      return state.product.list.filter(({discont_price}) => discont_price !== null)  
    }else if (category !== undefined) {
      header = state.category.list.find(({id}) => +id === +category).title
      return state.product.list.filter(({categoryId})=> +categoryId === +category)
    }
    header = "All products"
    return state.product.list
  }
  )
  
  console.log(products);

  return (
    <div className={s.container}>
      <h1>{header}</h1>
      <FilterBar/>
      <div className={s.products_wrapper}>
        {
          products.map(item => <ProductItem key={item.id} {...item}/>)
        }
      </div>
      
    </div>
  )
}
