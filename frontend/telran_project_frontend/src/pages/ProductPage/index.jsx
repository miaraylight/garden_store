import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";
import FilterBar from "../../components/FilterBar";
import { resetFilters } from "../../store/slice/productSlice";
import BreadCrumbs from "../../components/BreadCrumbs";
import { DynamicTitle } from "../../components/DynamicTitle";

export default function ProductPage() {
  useEffect(() => {
    window.scrollTo(0,0) 
  }, [])
  const { category, sale } = useParams();
  const [discounted, setDiscounted] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
  }, []);
  
  const [view, setView] = useState(true);
  const status = useSelector((state) => state.product.status);

  let header;

  let products = useSelector((state) => {
    if (sale !== undefined) {
      header = "Sale";
      return state.product.list.filter(
        ({ discont_price }) => discont_price !== null
      );
    } else if (category !== undefined) {
      header = state.category.list.find(({ id }) => +id === +category)?.title;
      return state.product.list.filter(
        ({ categoryId }) => +categoryId === +category
      );
    }
    header = "Shop";
    return state.product.list;
  });

  const prices = products.map(({ final_price }) => final_price)
  const min = Math.round(Math.min(...prices))
  const max = Math.round(Math.max(...prices))

  if (discounted) {
    products = products.filter(({ discont_price }) => discont_price !== null);
  }
  const filteredproducts = products.filter(({ show, nameInSearchRange }) => show && nameInSearchRange)

  return (
    <div>
      <DynamicTitle title={"Shop"}/>
      {status === "Loading" ? (
        <div className={s.container}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={s.container}>
          <BreadCrumbs props={header} />
          <FilterBar
            minValue={min}
            maxValue={max}
            checkboxVisibility={header}
            checkboxValue={setDiscounted}
            setView={setView}
          />
          <div
            className={s.products_wrapper_grid}
            style={
              view
                ? {
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(300px, 1fr))",
                  }
                : { gridTemplateColumns: "1fr" }
            }
          >
            {filteredproducts.length > 0 ?
              filteredproducts.map((item) => ( 
                <ProductItem key={item.id} {...item} view={view} />))
              : <p className={s.filterInfo}>No matches found</p>}
          </div>
        </div>
      )}
    </div>
  );
}
