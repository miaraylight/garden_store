import React from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";

export default function CategoriesPage() {
  const categories = useSelector((state) => state.category.list);

  return (
    <div className={s.container}>
      <div className={s.title_wrapper}>
        <h3>All Categories</h3>
      </div>
      <div className={s.wrapper}>
        <div className={s.categories_wrapper}>
          {categories.map((item) => (
            <CategoryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
