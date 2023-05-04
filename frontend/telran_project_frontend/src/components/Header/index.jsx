import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {
  return (
    <div className={s.container}>
      <NavLink className={s.logo_link} to='/'>eGrow <span>plants</span></NavLink>
      <div className={s.links_wrapper}>
        <NavLink className={s.link} to='/categories'>Catalog</NavLink>
        <NavLink className={s.link} to='/product/all'>Shop all</NavLink>
        <NavLink className={s.link} to='/product/sale'>On sale</NavLink>
      </div>

      <div className={s.links_wrapper}>
        <NavLink className={s.link} to='/'>Home</NavLink>
        <NavLink>Contact</NavLink>
        <NavLink className={s.link_basket} to='/basket'>
          <img src={process.env.PUBLIC_URL + '/images/basket-icon.png'} alt="basket-icon" /> 
        </NavLink>
      </div>
    </div>
  )
}
