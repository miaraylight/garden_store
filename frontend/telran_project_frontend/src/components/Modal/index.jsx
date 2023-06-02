import React from "react";
import s from "./style.module.css";

export default function Modal({
  activeModal,
  setActive,
  title,
  children
}) {
  return (
    <div
      className={activeModal[1] ? s.modal_active : s.modal}
      onClick={() => setActive(["",false])}
    >
      <div
        className={activeModal[1] ? s.modal_content_active : s.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.modal_header}>
          <h1>{title}</h1>
          <button onClick={() => setActive(["",false])}>&#10005;</button>
        </div>
        <div className={s.modal_items}>
          {children}
        </div>
      </div>
    </div>
  );
}
