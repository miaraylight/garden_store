import React from "react";
import s from "./style.module.css";
import FooterMap from "../../components/FooterMap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import MainButton from "../../components/MainButton";
import { DynamicTitle } from "../../components/DynamicTitle";

export default function ContactPage() {
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
        toast("Done!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    reset();
  };
  return (
    <div className={s.container}>
      <DynamicTitle title={"Contact"}/>
      <div className={s.title_wrapper}>
        <h3>Contact</h3>
      </div>
      <div className={s.form_wrapper}>
        <div className={s.contact_block}>
          <h2>Get in touch</h2>
          <div className={s.contact_info}>
            <div>
              <div className={s.contacts}>
                <img
                  src={process.env.PUBLIC_URL + "/images/geo-icon.png"}
                  alt=""
                />
                <span>visit us</span>
              </div>
              <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
            </div>
            <div>
              <div className={s.contacts}>
                <img
                  src={process.env.PUBLIC_URL + "/images/phone-icon.png"}
                  alt=""
                />
                <span>call us</span>
              </div>
              <p>+48-576-152794</p>
            </div>
            <div>
              <div className={s.contacts}>
                <img
                  src={process.env.PUBLIC_URL + "/images/email-icon.png"}
                  alt=""
                />
                <span>email us</span>
              </div>
              <p>miaraylight@gmail.com</p>
            </div>
          </div>
          <div className={s.social_media_wrapper}>
            <h5>Follow us</h5>
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
                href="https://www.linkedin.com/in/malika-taitelieva/"
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
                href="https://t.me/miaraylight"
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
        </div>
        <form className={s.form_block} onSubmit={handleSubmit(onSubmitHandler)}>
          <h4>Drop us a line or two</h4>
          <div className={s.form_name}>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
            />
          </div>
          <input
            type="text"
            placeholder="Email Address"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true, maxLength: 100 })}
          />
          <textarea
            type="text"
            placeholder="Your message"
            {...register("message", { required: true })}
          />
          <MainButton children={"submit"} />
        </form>
      </div>
      <div id={s.map}>
        <FooterMap />
      </div>
    </div>
  );
}
