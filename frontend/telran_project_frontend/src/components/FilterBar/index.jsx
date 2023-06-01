import React from "react";
import ReactSlider from "react-slider";
import s from "./style.module.css";
import "./sliderStyles.css";
import { useDispatch } from "react-redux";
import {
  filterByPriceRange,
  searchByName,
  sortByPrice,
} from "../../store/slice/productSlice";

export default function FilterBar({
  minValue,
  maxValue,
  checkboxVisibility,
  checkboxValue,
  setView,
}) {
  const dispatch = useDispatch();
  minValue = isNaN(minValue) ? 0 : minValue;
  maxValue = isNaN(maxValue) ? 0 : maxValue;

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    dispatch(searchByName(e.target.value))
  }

  return (
    <div className={s.container}>
      <div className={s.toolbar}>
        <div className={s.filter_wrapper}>
          <div className={s.filter_block}>
            <button className={s.filter_btn}>
              <img
                src={process.env.PUBLIC_URL + "/images/filter-icon.png"}
                alt="filter-icon"
              />
            </button>
            <span>Filter by price</span>
          </div>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[minValue, maxValue]}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            pearling
            minDistance={13}
            max={maxValue}
            min={minValue}
            onChange={(value, index) => dispatch(filterByPriceRange(value))}
          />
          <div
            className={s.discount_block}
            style={
              checkboxVisibility === "Sale"
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <label className={s.discount_block_label}>
              <input
                type="checkbox"
                onChange={(e) => checkboxValue(e.target.checked)}
              />
              <span className={s.checkmark}></span>
              Discounted
            </label>
          </div>
        </div>
          <div className={s.search_block}>
            <input type="text" onChange={onChangeHandler}/>
          </div>
        <div className={s.sort_block}>
          <select
            name="sort_options"
            className={s["select"]}
            onChange={(e) => dispatch(sortByPrice(e.target.value))}
          >
            <option value="default">Default sorting</option>
            <option value="lowToHigh">Sort by price: low to high</option>
            <option value="highToLow">Sort by price: high to low</option>
          </select>
          <button className={s.grid_btn} onClick={() => setView(true)}>
            <img
              src={process.env.PUBLIC_URL + "/images/grid-view.png"}
              alt="grid-view-icon"
            />
          </button>
          <button className={s.list_btn} onClick={() => setView(false)}>
            <img
              src={process.env.PUBLIC_URL + "/images/list-view.png"}
              alt="list-view-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
