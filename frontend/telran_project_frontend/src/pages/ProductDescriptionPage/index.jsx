import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import { addItemToBasket } from '../../store/slice/basketSlice'
import { toast } from 'react-toastify';


export default function ProductDescriptionPage() {
    const { productId } = useParams()
    const [count, setCount] = useState(1)
    const [currentItem, setCurrentItem] = useState(+productId)
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.list)
    const product = products.find(({ id }) => +id === +currentItem)
    const maxItems = products.length
    const { id, title, price, discont_price, final_price, image, description } = product;
    const loupeRef = useRef()
    const enlargedBlockRef = useRef()

    const onClickHandler = () => {
        const data = { product_id: id, product_count: count }
        dispatch(addItemToBasket(data))
        toast.success('Added to cart')
        setCount(1)
    }

    const onMouseMoveHandler = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent
        loupeRef.current.style.left = offsetX + 'px'
        loupeRef.current.style.top = offsetY + 'px'
        enlargedBlockRef.current.style.backgroundPosition = `${-offsetX}px ${-offsetY * 0.7}px`

    }
    return (
        
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.product_item}>

                    <div className={s.product_item_img} onMouseMove={onMouseMoveHandler}>
                        <img src={`http://localhost:3333/${image}`} alt="product" />
                        <div
                            className={s.loupe}
                            ref={loupeRef}
                        >
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="1280.000000pt" height="1272.000000pt" viewBox="0 0 1280.000000 1272.000000"
                                preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                                </metadata>
                                <g transform="translate(0.000000,1272.000000) scale(0.100000,-0.100000)"
                                    fill="#000000" stroke="none">
                                    <path d="M3460 12700 c-195 -15 -273 -26 -460 -64 -124 -26 -270 -62 -325 -81
-324 -111 -397 -141 -595 -240 -876 -438 -1539 -1194 -1865 -2125 -72 -206
-89 -267 -133 -490 -44 -223 -53 -286 -67 -498 -15 -224 -15 -263 0 -485 14
-210 23 -276 66 -497 45 -225 61 -284 136 -500 113 -325 231 -561 425 -850
147 -220 389 -510 527 -632 39 -35 95 -91 125 -125 30 -35 135 -134 233 -220
493 -437 1078 -729 1726 -862 219 -45 272 -52 501 -68 242 -16 270 -16 510 0
225 15 283 23 498 67 134 27 257 53 273 59 416 132 762 293 1060 495 99 67
185 126 192 129 7 5 23 -9 42 -36 25 -37 40 -48 88 -63 56 -18 67 -28 353
-329 1228 -1291 3117 -3302 4504 -4794 l460 -493 80 7 c78 6 85 9 196 78 224
139 541 441 696 663 69 99 77 115 85 174 5 36 8 73 9 82 0 25 -530 576 -1056
1098 -511 507 -829 813 -1839 1770 -1178 1117 -1864 1785 -2350 2289 -219 227
-306 311 -322 311 -16 0 -23 6 -23 20 0 25 -43 95 -67 108 -15 9 -10 21 50
110 117 177 276 511 367 772 69 196 88 266 130 476 43 215 52 276 67 498 16
238 16 267 0 509 -16 228 -23 284 -67 499 -130 641 -419 1224 -855 1723 -87
99 -188 206 -224 237 -36 32 -93 89 -126 126 -33 38 -141 141 -241 229 -487
430 -1069 722 -1704 855 -205 43 -267 52 -490 68 -298 23 -286 23 -590 0z
m1020 -249 c308 -41 587 -112 868 -219 163 -62 92 -44 -129 32 -176 61 -259
83 -464 124 -220 45 -279 53 -495 67 -226 15 -263 15 -490 0 -206 -14 -282
-24 -475 -61 -126 -25 -241 -47 -255 -50 l-25 -4 25 10 c64 28 409 93 580 109
63 6 131 13 150 15 96 11 572 -4 710 -23z m-165 -106 c595 -40 1211 -256 1735
-608 338 -227 511 -399 742 -742 272 -402 446 -816 546 -1305 44 -216 52 -274
67 -488 15 -224 15 -261 0 -480 -14 -204 -23 -272 -66 -489 -43 -216 -61 -283
-128 -475 -262 -746 -747 -1378 -1401 -1823 -251 -170 -550 -323 -810 -413
-96 -33 -193 -67 -215 -75 -22 -8 -152 -37 -290 -65 -218 -44 -280 -53 -487
-67 -217 -15 -256 -15 -480 0 -661 43 -1267 249 -1803 613 -342 233 -515 405
-739 736 -268 396 -456 843 -551 1309 -40 196 -49 262 -64 480 -17 240 -17
264 -1 502 15 215 24 283 65 484 287 1428 1415 2558 2844 2846 195 40 274 51
470 65 130 9 265 15 301 13 36 -2 155 -10 265 -18z m-1315 -12 c-53 -21 -389
-136 -405 -140 -11 -2 7 8 40 22 79 34 346 125 365 124 13 0 13 -1 0 -6z
m-491 -177 c-10 -9 -313 -157 -304 -148 12 12 286 151 299 152 5 0 7 -2 5 -4z
m3117 -54 c-5 -4 -86 36 -86 43 0 3 20 -5 45 -17 24 -12 43 -23 41 -26z m1724
-2007 c0 -5 -5 -3 -10 5 -5 8 -10 20 -10 25 0 6 5 3 10 -5 5 -8 10 -19 10 -25z
m77 -297 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m31 -143 c-1
-27 -26 73 -26 105 0 14 6 0 13 -30 8 -30 14 -64 13 -75z m9 -57 c-3 -7 -5 -2
-5 12 0 14 2 19 5 13 2 -7 2 -19 0 -25z m52 -442 c2 -129 -6 -82 -12 69 -3 90
-2 117 3 75 4 -36 8 -101 9 -144z m8 -143 c-3 -10 -5 -2 -5 17 0 19 2 27 5 18
2 -10 2 -26 0 -35z m0 -155 c-2 -13 -4 -5 -4 17 -1 22 1 32 4 23 2 -10 2 -28
0 -40z m-11 -165 c-4 -76 -11 -154 -16 -173 l-10 -35 5 40 c2 22 7 100 11 173
4 72 9 132 12 132 3 0 2 -62 -2 -137z m-66 -495 c-18 -84 -34 -155 -37 -158
-6 -6 -6 -5 34 199 15 80 29 137 31 129 2 -9 -11 -85 -28 -170z m-43 -190 c-3
-8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-83 -269 c-25 -73 -50 -140
-55 -149 -9 -13 -10 -13 -6 0 15 53 101 290 104 287 2 -2 -17 -64 -43 -138z
m-189 -451 c-37 -73 -71 -137 -77 -143 -5 -5 23 56 63 137 40 81 75 145 77
143 2 -2 -26 -64 -63 -137z m-222 -388 c-9 -17 -28 -43 -41 -58 -13 -15 -6 -1
14 31 38 59 58 79 27 27z"/>
                                </g>
                            </svg>
                        </div>
                        <div
                            ref={enlargedBlockRef}
                            className={s.enlarged_block}
                            style={{ backgroundImage: `url(http://localhost:3333/${image})` }}
                        >
                        </div>
                    </div>
                    <div className={s.product_item_info}>
                        <div className={s.product_item_switchBtn}>
                            <button onClick={() => setCurrentItem(pre => pre - 1 < 1 ? maxItems : pre - 1)}>&#10094;</button>
                            <button onClick={() => setCurrentItem(pre => pre + 1 > maxItems ? 1 : pre + 1)}>&#10095;</button>
                        </div>
                        <h1>{title}</h1>
                        <div className={s.product_item_price_block}>
                            {
                                discont_price === null
                                    ? <div className={s.product_item_price}>
                                        <p className={s.final_price}>${final_price}</p>
                                    </div>
                                    : <div className={s.product_item_price}>
                                        <p className={s.throughed_price}>${price}</p>
                                        <p className={s.final_price}> {final_price}</p>
                                        <p className={s.discount_percentage}>-{((price - discont_price) * 100 / price).toFixed(1)}%</p>
                                    </div>
                            }
                        </div>
                        <div className={s.product_item_toolbar}>
                            <div className={s.product_item_countbar}>
                                <button onClick={() => setCount(pre => pre - 1 < 1 ? 1 : pre - 1)}>&#8211;</button>
                                <p>{count}</p>
                                <button onClick={() => setCount(pre => pre + 1)}>+ </button>
                            </div>
                            <button className={s.product_item_addBtn} onClick={onClickHandler}>Add to cart</button>
                            
                        </div>
                        <div className={s.product_item_payment}>
                            <p>Guaranteed safe checkout</p>
                            <div className={s.product_item_payment_img}>
                                <img src={process.env.PUBLIC_URL + '/images/visacard-icon.png'} alt="" />
                                <img src={process.env.PUBLIC_URL + '/images/mastercard-icon.png'} alt="" />
                                <img className={s.icon} src={process.env.PUBLIC_URL + '/images/american-express-icon.png'} alt="" />
                                <img className={s.icon} src={process.env.PUBLIC_URL + '/images/discover-icon.png'} alt="" />
                            </div>
                        </div>
                        <div className={s.product_item_payment_info}>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>No-Risk Money Back Qurantee</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>No Hassie Refunds</p>
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" /></svg>Secure Payments</p>
                        </div>
                    </div>
                </div>
                <div className={s.product_descr}>
                    <span className={s.descr_span}>Description</span>
                    <p className={s.descr}>{description}</p>
                </div>

            </div>
            
        </div>
    )
}
