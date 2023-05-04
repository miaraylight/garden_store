import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'

export default function Banner() {
  const link = '/product/sale'
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <div className={s.banner_content}>
          <h3>SaleW</h3>
          <p>New season</p>
          <Link to={link}>
            <button>Shop now</button></Link>
        </div>
        <div className={s.banner_img}>
          <img src={process.env.PUBLIC_URL + '/images/banner-background.png'} alt="banner-background" />
        </div>
      </div>
    </div>
  )
}
