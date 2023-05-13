import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import s from './style.module.css'

export default function BreadCrumbs({props}) {
    const { pathname } = useLocation()
  return (
    <div className={s.breadCrumbs}>
        <Link to='/'>Home /</Link> <Link to={pathname}>{props}</Link>
    </div>
  )
}
