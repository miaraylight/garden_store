import React from 'react'
import s from './style.module.css'
import FooterMap from '../../components/FooterMap'

export default function ContactPage() {
  return (
    <div className={s.container}>
      <div className={s.title_wrapper}>
        <h3>Contact</h3>
      </div>
      <div className={s.form_wrapper}>
        <div className={s.contact_block}>
          <h2>Get in touch</h2>
          <div className={s.contact_info}>
            <div>
              <div className={s.contacts}>
                <img src={process.env.PUBLIC_URL + '/images/geo-icon.png'} alt="" />
                <span>visit us</span>
              </div>
              <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
            </div>
            <div>
              <div className={s.contacts}>
                <img src={process.env.PUBLIC_URL + '/images/phone-icon.png'} alt="" />
                <span>call us</span>
              </div>
              <p>+48-576-152794</p>
            </div>
            <div>
              <div className={s.contacts}>
                <img src={process.env.PUBLIC_URL + '/images/email-icon.png'} alt="" />
                <span>email us</span>
              </div>
              <p>miaraylight@gmail.com</p>
            </div>
          </div>
          <div className={s.social_media_wrapper}>
            <h5>Follow us</h5>
            <div className={s.social_links}>
              <a href="https://www.instagram.com/" className={s.contact_media}>
                <img src={process.env.PUBLIC_URL + '/images/instagram-icon.png'} alt="instagram-icon" />
              </a>
              <a href="https://www.instagram.com/" className={s.contact_media}>
                <img src={process.env.PUBLIC_URL + '/images/ln-icon.png'} alt="ln-icon" />
              </a>
              <a href="https://www.instagram.com/" className={s.contact_media}>
                <img src={process.env.PUBLIC_URL + '/images/youtube-icon.png'} alt="youtube-icon" />
              </a>
              <a href="https://www.instagram.com/" className={s.contact_media}>
                <img src={process.env.PUBLIC_URL + '/images/telegram-icon.png'} alt="telegram-icon" />
              </a>
            </div>

          </div>
        </div>
        <form className={s.form_block}>
          <h4>Drop us a line or two</h4>
          <div className={s.form_name}>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="text" placeholder='Email Address' />
          <input type="text" placeholder='Subject' />
          <textarea type="text" placeholder='Your message' />
          <button type='submit'>Submit</button>
        </form>
      </div>
      <div id={s.map}>
          <FooterMap/>
        </div>
    </div>
  )
}
