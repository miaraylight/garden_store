import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

export default function Footer() {
  return (
    <div className={s.container}>
        <div className={s.footer}>
            <div className={s.footer_logo}>
            <NavLink className={s.footer_logo_link} to='/'>eGrow <span>plants</span></NavLink>
            </div>
            <div className={s.footer_links}>
                <p className={s.footer_title}>Quick Links</p>
                <div>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink  to='/contact'>Contact</NavLink>
                    <NavLink to='/basket'>Cart</NavLink>
                    <NavLink to='/categories'>Catalog</NavLink>
                    <NavLink to='/product/all'>Shop</NavLink>
                    <NavLink to='/product/sale'>Sale</NavLink>
                </div>
            </div>
            <div className={s.footer_social}>
                <p className={s.footer_title}>Our Socials</p>
                <div className={s.social_links}>
                    <a href="https://www.instagram.com/" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/instagram-icon.png'} alt="instagram-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/malika-taitelieva-88b333273/" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/ln-icon.png'} alt="ln-icon" />
                    </a>
                    <a href="https://www.youtube.com/" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/youtube-icon.png'} alt="youtube-icon" />
                    </a>
                    <a href="https://t.me/sirokko01" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/telegram-icon.png'} alt="telegram-icon" />
                    </a>
                </div>
            </div>
            <div className={s.footer_subscribe_form}>
                <p className={s.footer_title}>Subscribe to Our Newsletter</p>
                <div className={s.subscribe_form}>
                    <input type="text" placeholder='Your email adress...'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}
