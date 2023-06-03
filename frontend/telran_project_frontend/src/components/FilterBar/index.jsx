import React, { useRef, useState } from "react";
import ReactSlider from "react-slider";
import s from "./style.module.css";
import "./sliderStyles.css";
import { useDispatch } from "react-redux";
import {
  filterByPriceRange,
  resetFilters,
  searchByName,
  sortByPrice,
} from "../../store/slice/productSlice";
import Modal from "../Modal";
import MainButton from "../MainButton";

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

  const [inputValue, setInputValue] = useState("");

  const [activeModal, setActiveModal] = useState(["", false]);

  const sliderRef = useRef(null);

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    dispatch(searchByName(e.target.value));
  };

  const resetHandler = () => {
    dispatch(resetFilters());
    setInputValue("");
    sliderRef.current.state.value = [minValue, maxValue];
  };

  return (
    <div className={s.container}>
      <div className={s.filter_btn} onClick={() => setActiveModal(["", true])}>
        <button>
          <img
            src={process.env.PUBLIC_URL + "/images/filter-icon.png"}
            alt="filter-icon"
          />
        </button>
        <span>Filter</span>
      </div>
      <div className={s.view_btns}>
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
      <Modal activeModal={activeModal} setActive={setActiveModal} appearance={'left'}>
        <div className={s.toolbar}>
          <div className={s.search_block}>
            <input
              className={s.search_block_input}
              type="text"
              value={inputValue}
              onChange={onChangeHandler}
              placeholder="Search products..."
            />
            <button
              className={s.search_block_btn}
              onClick={() => setActiveModal(["", false])}
            >
              <span className="material-icons">keyboard_arrow_right</span>
            </button>
          </div>
          <div className={s.filter_block}>
            <p className={s.filter_block_title}>Filter by price</p>
            <ReactSlider
              ref={sliderRef}
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
          </div>
          <div>
            <MainButton onClickHandler={() => resetHandler()}>Reset</MainButton>
          </div>
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
          </div>
        </div>
      </Modal>
    </div>
  );
}
