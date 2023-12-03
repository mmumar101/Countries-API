import React from 'react'
import { GetThemeValue } from './contextTheme'


    const FilterCountry = ({onSelect}) => {
    const {darkTheme} = GetThemeValue()

    const selectHandler = (e) => {
        const regionName = e.target.value
        onSelect(regionName)
    }

  return (
    <div className=' mt-8 '>
        <select className={` ${darkTheme ? 'bg-[#FFFFFF]' : 'bg-[#2B3844]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} px-3 h-11 w-40 text-sm rounded-md mx-auto `} onChange={selectHandler} >
            <option>Filter by Region</option>
            <option value='Africa'>Africa </option>
            <option value='America'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
        </select>
    </div>
  )
}

export default FilterCountry