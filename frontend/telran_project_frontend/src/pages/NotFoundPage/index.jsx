import React from 'react'
import s from './style.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <img style={{width: '100%'}} src={process.env.PUBLIC_URL + '/images/background_404.png'} alt="" />
    </div>
  )
}
