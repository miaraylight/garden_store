import React from 'react'
import s from './style.module.css'
import BasketItem from '../../components/BasketItem'
import { Link, NavLink } from 'react-router-dom'
import MainButton from '../MainButton'

export default function Modal({ activeModal, setActive, list, data, subtotal }) {
    const final = activeModal[0] === 'nav' ? list : data
    return (
        <div
            className={activeModal[1] ? s.modal_active : s.modal} 
            style={activeModal[0] === 'nav' ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'}}
            onClick={() => setActive(['', false])}
            >
            <div
                className={activeModal[1] ? s.modal_content_active : s.modal_content}
                onClick={e => e.stopPropagation()}>
                <div className={s.modal_header}>
                    <h1>{activeModal[0] === 'basket' ? 'Shopping cart' : 'Menu'}</h1>
                    <button onClick={() => setActive(['',false])}>&#10005;</button>
                </div>
                <div className={s.modal_items}>
                    <table>
                        <tbody>
                         {
                            activeModal[0] === 'nav'
                            ? list.map(item => 
                                <tr className={s.menu_wrapper}>
                                    <td className={s.menu_icon}><span className='material-icons'>{item.icon}</span></td> 
                                    <td onClick={() => setActive(['',false])} className={s.menu_title}><NavLink to={item.to}>{item.title}</NavLink></td>
                                </tr>)
                            : data.map(item => 
                                <BasketItem key={item.id} {...item} modal={true}/>)
                            // final.map(item => 
                            //     <tr key={item.title}>
                            //         <td><span className="material-icons">{item.icon}</span></td> 
                            //         <td><NavLink to={item.to}>{item.title}</NavLink></td>
                            //         <td><span>{item.price}</span></td>
                            //         <td><span>{item.count}</span></td>
                            //     </tr>)
                        }
                        </tbody>
                    </table>
                </div>
                <div className={s.basket_options} 
                style={activeModal[0] === 'basket' ? {display: 'block'} : {display: 'none'} }
                >
                    <div className={s.modal_basket_total}>
                        <p>{subtotal}</p>
                        <p>$</p>
                    </div>
                    <Link to='/basket'>
                    <MainButton children={'view cart'}/>
                    </Link>
                </div>
                
                
            </div>
        </div>
    )
}
