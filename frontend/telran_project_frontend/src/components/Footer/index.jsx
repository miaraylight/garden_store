import React from 'react'
import s from './style.module.css'

export default function Footer() {

  return (
    <div>
        <div>
            <div>
                <p>3458734-715-6</p>
                <div>
                    <div>
                        <img src="icon" alt="instagram-icon" />
                        <span>Instagram</span>
                    </div>
                    <div>
                        <img src="icon" alt="WhatsApp-icon" />
                        <span>WhatsApp</span>
                    </div>
                </div>
            </div>
            <div>
                <p>Address</p>
                <a href="https://www.google.com/search?q=telranDE">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                <div>
                    <span>Working Hours</span>
                    <span>24 hours a day</span>
                </div>
            </div>
        </div>
        <div id={s.map}>

        </div>
    </div>
  )
}
