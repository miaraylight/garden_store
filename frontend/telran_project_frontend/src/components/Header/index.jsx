import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import s from './style.module.css'
import Modal from '../Modal'

export default function Header() {
  const basketCount = useSelector(state => state.basket.list.reduce((acc, {count})=> acc + count, 0))
  const { pathname }= useLocation()
  const [modalActive, setModaleActive] = useState(false)
  return (
    <div>
      <div className={s.container}>
      <NavLink className={s.logo_link} to='/'>eGrow <span>plants</span></NavLink>
      <div className={s.links_wrapper}>
        <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/categories'>Catalog</NavLink>
        <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/product/all'>Shop all</NavLink>
        <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/product/sale'>On sale</NavLink>
      </div>

      <div className={s.links_wrapper}>
        <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? s.active_link : s.link} to='/contact'>Contact</NavLink>
        <button 
        data-count={basketCount === 0 ? null : basketCount} 
        className={s.link_basket} 
        onClick={() => setModaleActive(true)}
        >
          <img src={process.env.PUBLIC_URL + '/images/basket-icon.png'} alt="basket-icon" /> 
        </button>
      </div>
      
    </div>
    <div style={pathname === '/basket' ? {display: 'none'} : {display: 'block'}}>
      <Modal activeModal={modalActive} setActive={setModaleActive}/>
    </div>
    
    </div>
    
  )
}
