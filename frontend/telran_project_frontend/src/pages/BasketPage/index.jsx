import React, { useEffect } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../../components/BasketItem";
import { toast } from "react-toastify";
import MainButton from "../../components/MainButton";
import { DynamicTitle } from "../../components/DynamicTitle";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetBasket } from "../../store/slice/basketSlice";

export default function BasketPage() {
  useEffect(() => {
    window.scrollTo(0,0) 
  }, [])

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { product, basket } = useSelector((state) => state);

  const basketData = basket.list.map((item) => {
    const target = product.list.find(({ id }) => item.id === id);
    return { ...target, ...item };
  });

  const subtotal = basketData
    .reduce((acc, item) => acc + item.price * item.count, 0)
    .toFixed(2);
  let total = basketData
    .reduce((acc, item) => acc + item.final_price * item.count, 0)
    .toFixed(2);

    const { register, handleSubmit, reset } = useForm();

  const onSubmitHandler = async (data) => {
    try {
      const responce = await fetch("http://localhost:3333/order/send", {
        method: "POST",
        headers: {
          Accept: {
            order: basketData,
            coupon: data ?? ''
          },
        },
      });
      if (responce.ok) {
        const jsonResponse = await responce.json();
        console.log(jsonResponse);
        toast.promise(() => Promise.resolve(jsonResponse), {
          pending: "Order is processing...",
          success: "Order completed successfully!",
        }, {autoClose: 2300});
        dispatch(resetBasket())
        setTimeout(() => {navigate('/')}, 3000)
        
      }
    } catch (error) {
      console.log(error);
      toast.promise(() => Promise.reject(error), {
        error: "Something went wrong",
      });
    }
    reset()
  };

  const onClickHandler = () => {

  }

  return (
    <div className={s.container}>
      <DynamicTitle title={"Cart"}/>
      <h1 className={s.title}>Cart</h1>
      {
        basketData.length === 0 
        ? <div className={s.basket_empty_wrapper}>
          <p className={s.basket_empty}>
            <span className="material-icons">event_note</span>
            Your cart is currently empty.</p>
          <Link to='/product/all'>
          <MainButton>return to shop</MainButton>
          </Link>
        </div>
        :<div className={s.basket}>
        <div className={s.basket_items_block}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody className={s.basket_items}>
              {basketData.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))}
            </tbody>
          </table>
        </div>
        <div className={s.basket_total_block}>
          <div className={s.basket_total_header}>
            <p>Card totals</p>
          </div>
          <div className={s.basket_total_content}>
            <div className={s.basket_calculation_wrapper}>
              <div className={s.basket_calculation_subtotal}>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className={s.basket_calculation_total}>
              <span>Discount</span>
              <span>${(subtotal - total).toFixed(2)}</span>
            </div>
            <div className={s.basket_calculation_total}>
              <span>Total</span>
              <span>${total}</span>
            </div>
            </div>
            
            <form className={s.basket_order_form} onSubmit={handleSubmit(onSubmitHandler)}>
              <input 
              type="text"
              {...register("coupon")} 
              placeholder="Enter your coupon if any"/>
              <MainButton children={"order"} onClickHandler={onClickHandler} />
            </form>
          </div>
        </div>
      </div>
      }
      
    </div>
  );
}
