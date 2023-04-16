import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <NavLink to='/'>Main</NavLink>
        <NavLink to='/basket'>Basket</NavLink>
        <NavLink to='/product/all'>All</NavLink>
        <NavLink to='/product/:sale'>Sale</NavLink>
    </div>
  )
}
