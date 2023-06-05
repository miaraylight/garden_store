import React from 'react'
import s from './style.module.css'

export default function MainButton({ children, onClickHandler }) {
  return (
    <button 
    className={s.main_btn}
    onClick={onClickHandler}>
      { children }
      </button>
  )
}
