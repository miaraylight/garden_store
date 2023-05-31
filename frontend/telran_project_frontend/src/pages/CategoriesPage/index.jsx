import React, { useEffect } from "react";
import s from "./style.module.css";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";
import { DynamicTitle } from "../../components/DynamicTitle";

export default function CategoriesPage() {
  useEffect(() => {
    window.scrollTo(0,0) 
  }, [])

  const categories = useSelector((state) => state.category.list);

  return (
    <div className={s.container}>
      <DynamicTitle title={"Categories"}/>
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
