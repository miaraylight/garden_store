import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function Banner() {
  const link = '/product/sale'
  return (
    <div className={s.banner}>
        <h3>Sale</h3>
        <p>New season</p>
        <Link to={link}>
          <button>Sale</button>
        </Link>
        
  </div>
  )
}
