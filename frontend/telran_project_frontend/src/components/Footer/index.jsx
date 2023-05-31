import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Logo from "../Logo";
import MainButton from "../MainButton";

export default function Footer() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmitHandler = async (data) => {
    try {
      const response = await fetch("http://localhost:3333/feedback/send", {
        method: "POST",
        headers: {
          Accept: data,
        },
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        console.log(jsonResponse.message);
        toast.success("Thank you for your subscribing!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong !");
    }

    reset();
  };
  return (
    <div className={s.container}>
      <div className={s.footer}>
        <Logo />
        <div className={s.footer_links}>
          <p className={s.footer_title}>Quick Links</p>
          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/basket">Cart</NavLink>
            <NavLink to="/categories">Catalog</NavLink>
            <NavLink to="/product/all">Shop</NavLink>
            <NavLink to="/product/sale">Sale</NavLink>
          </div>
        </div>
        <div className={s.footer_social}>
          <p className={s.footer_title}>Our Socials</p>
          <div className={s.social_links}>
            <a 
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank" 
              className={s.contact_media}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/instagram-icon.png"}
                alt="instagram-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/malika-taitelieva-88b333273/"
              rel="noreferrer"
              target="_blank"
              className={s.contact_media}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/ln-icon.png"}
                alt="ln-icon"
              />
            </a>
            <a 
              href="https://www.youtube.com/"
              rel="noreferrer"
              target="_blank" 
              className={s.contact_media}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/youtube-icon.png"}
                alt="youtube-icon"
              />
            </a>
            <a 
              href="https://t.me/sirokko01"
              rel="noreferrer"
              target="_blank" 
              className={s.contact_media}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/telegram-icon.png"}
                alt="telegram-icon"
              />
            </a>
          </div>
        </div>
        <div className={s.footer_subscribe_form}>
          <p className={s.footer_title}>Subscribe to Our Newsletter</p>
          <form
            className={s.subscribe_form}
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <input
              type="text"
              placeholder="Your email adress..."
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
            />
            <MainButton children={"subscribe"} />
          </form>
        </div>
      </div>
      <a
        className={s.footer_cpRights}
        rel="noreferrer"
        target="_blank"
        href="https://websitedemos.net/egrow-plants-04/"
      >
        Copyright © 2023 eGrow Plants | Powered by eGrow Plants
      </a>
    </div>
  );
}
