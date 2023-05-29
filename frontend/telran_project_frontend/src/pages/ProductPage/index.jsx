import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation  } from 'react-router-dom'
import ProductItem from '../../components/ProductItem';
import s from './style.module.css'
import FilterBar from '../../components/FilterBar';
import { resetFilters } from '../../store/slice/productSlice';
import BreadCrumbs from '../../components/BreadCrumbs';

export default function ProductPage() {
  const { category, sale } = useParams()
  const [discounted, setDiscounted] = useState()
  const dispatch = useDispatch()

  useEffect(() => { dispatch(resetFilters())}, [])
  const { pathname } = useLocation()
  if (pathname !== '/') {
    
  }
  const [ view, setView ] = useState(true)
  console.log(view)
  
  const status = useSelector(state => state.product.status)

  let header;

  let products = useSelector(state => {
    if (sale !== undefined) {
      header = "Sale"
      return state.product.list.filter(({discont_price}) => discont_price !== null)  
    }else if (category !== undefined) {
      header = state.category.list.find(({id}) => +id === +category)?.title
      return state.product.list.filter(({categoryId})=> +categoryId === +category)
    }
    header = "Shop"
    return state.product.list
  }
  )

  const prices = products.map(({final_price}) => final_price)
  const min = Math.min(...prices)
  const max = Math.max(...prices)

  if (discounted) {
    products = products.filter(({discont_price}) => discont_price !== null)
  }

  return (
    <div>
      {
        status === "Loading" 
        ? <div className={s.container}>
            <p>Loading...</p>
          </div>
        : <div className={s.container}>
        <BreadCrumbs props={header}/>
        <FilterBar 
          minValue={min} 
          maxValue={max}
          checkboxVisibility={header} 
          checkboxValue={setDiscounted}
          setView={setView}
        />
        <div className={s.products_wrapper_grid} style={view ? {gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'} : {gridTemplateColumns: '1fr'}}>
          {
            products
              .filter(({show}) => show)
              .map(item => <ProductItem key={item.id} {...item} view={view}/>)
          }
        </div>
        
      </div>
      }
    </div>
    
  )
}
