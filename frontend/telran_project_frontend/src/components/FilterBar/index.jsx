import React from 'react'
import s from './style.module.css'
import ReactSlider from 'react-slider'


export default function FilterBar() {
  return (
    <div className={s.container}>
          <div className={s.filter}>
            <ReactSlider
                className={s.horizontal_slider}
                thumbClassName={s.example_thumb}
                trackClassName={s.example_track}
                defaultValue={[0, 100]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                pearling
                minDistance={10}
            />  
            <select name="filter_options" className={s.filter_options}>
                <option value="default">default</option>
                <option value="lowToHigh">Sort by price: low to high</option>
                <option value="highToLow">Sort by price: high to low</option>
            </select>
      </div>
    </div>
  )
}
