import React from 'react'
import s from './style.module.css'
import FooterMap from '../FooterMap'

export default function Footer() {
  return (
    <div className={s.container}>
        <address className={s.contact_info}>
            <div className={s.number_wrapper}>
                <p className={s.head}>Contact</p>
                <p className={s.number}>+49 999 999 99 99</p>
                <div className={s.social_media_wrapper}>
                    <a href="https://www.whatsapp.com/?lang=en" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/instagram_icon.svg'} alt="instagram-icon" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.instagram.com/" className={s.contact_media}>
                        <img src={process.env.PUBLIC_URL + '/images/whatsapp_icon.svg'} alt="WhatsApp-icon" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
            <div className={s.address_wrapper}>
                <p className={s.head}>Address</p>
                <a href="https://www.google.com/search?q=telranDE">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                <div className={s.working_hours_wrapper}>
                    <span>Working Hours</span>
                    <p>24 hours a day</p>
                </div>
            </div>
        </address>
        <div id={s.map}>
            <FooterMap/>
        </div>
    </div>
  )
}
