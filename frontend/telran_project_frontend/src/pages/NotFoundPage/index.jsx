import React from 'react'
import s from './style.module.css'
import { DynamicTitle } from '../../components/DynamicTitle'

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <DynamicTitle title={"404"}/>
      <img style={{width: '100%'}} src={process.env.PUBLIC_URL + '/images/background_404.png'} alt="" />
    </div>
  )
}
