import React, { useState, useEffect } from 'react'
import s from './style.module.css'

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 1500) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);

const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

  return (
    <div className={s.container} onClick={()=>goToTop()}>
      {showTopBtn && (
      <button className={s.scroll_btn}>
        <span className='material-icons'>keyboard_arrow_up</span>
      </button>)}
    </div>
    
  )
}
