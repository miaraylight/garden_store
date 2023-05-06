import React from 'react'
import ReactSlider from 'react-slider'
import './filterbar.css'
import { useDispatch } from 'react-redux'
import { sortByPrice } from '../../store/slice/productSlice'

export default function FilterBar() {
  const dispatch = useDispatch()
  return (
    <div className="container">
          <div className="toolbar">
            <div className='filter-block'>
              <button className="filter-btn">
                <img src={process.env.PUBLIC_URL + '/images/filter-icon.png'} alt="filter-icon" />
              </button>
              <span>Filter by price</span>
            </div>
            <ReactSlider
                className="horizontal_slider"
                thumbClassName="example_thumb"
                trackClassName="example-track"
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
            /> 
            <div className='discount-block'>
              <input type="checkbox" name="discounted"/>
              <label htmlFor="discounted"> Discounted</label>
            </div> 
            <div className="sort_block">
              <select 
              name="sort_options" 
              className='select'
              onChange={(e)=> dispatch(sortByPrice(e.target.value))}>
                <option value="default">Default sorting</option>
                <option value="lowToHigh">Sort by price: low to high</option>
                <option value="highToLow">Sort by price: high to low</option>
              </select>
              <button className="grid-btn">
                <img src={process.env.PUBLIC_URL + '/images/grid-view.png'} alt="grid-view-icon" />
              </button>
              <button className="list-btn">
                <img src={process.env.PUBLIC_URL + '/images/list-view.png'} alt="list-view-icon" />
              </button>
              
            </div>
            
      </div>
    </div>
  )
}
