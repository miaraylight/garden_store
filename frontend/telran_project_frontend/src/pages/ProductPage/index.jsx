import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLoadAllProductsAction } from '../../store/asyncActions/allProducts'

export default function ProductPage() {

  const products = useSelector(state=>state.products)
  console.log(products);
  const dispatch = useDispatch()
  return (
    <div>
      {/* <div>{products[0].title}</div> */}
      <button onClick={()=>dispatch(asyncLoadAllProductsAction())}>show</button>
    </div>
  )
}
