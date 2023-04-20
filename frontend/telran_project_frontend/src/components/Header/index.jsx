import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.logo_wrapper}>
        <img src={process.env.PUBLIC_URL + '/images/logo_icon.svg'} alt="" />
        <NavLink className={s.catalog} to='/categories'>Catalog</NavLink>
      </div>
      <div className={s.links_wrapper}>
        <NavLink className={s.link} to='/'>Main Page</NavLink>
        <NavLink className={s.link} to='/product/all'>All products</NavLink>
        <NavLink className={s.link} to='/product/sale'>All sales</NavLink>
        <NavLink className={s.link_basket} to='/basket'>
          <img src={process.env.PUBLIC_URL + '/images/basket_icon.svg'} alt="" />
        </NavLink>
      </div>
    </div>
  )
}
