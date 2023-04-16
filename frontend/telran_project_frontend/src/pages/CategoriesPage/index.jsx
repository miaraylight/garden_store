import React from 'react'
import { useSelector } from 'react-redux'

export default function CategoriesPage() {
  const cat = useSelector(state => state.categories)
  console.log(cat);
  return (
    <div>CategoriesPage</div>
  )
}
