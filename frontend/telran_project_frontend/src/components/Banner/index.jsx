import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'

export default function Banner() {
  const link = '/product/sale'
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <div className={s.banner_content}>
          <h3>New Season</h3>
          <p>Unique deals & offers every single day</p>
          <Link to={link}>
            <MainButton children={'shop now'}/>
            </Link>
        </div>
        <div className={s.banner_img}>
          <img src={process.env.PUBLIC_URL + '/images/banner-background.png'} alt="banner-background" />
        </div>
      </div>
    </div>
  )
}
