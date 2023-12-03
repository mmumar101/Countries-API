import React, { useState } from 'react'
import logo1 from '../images/iconoir_search.png';
import { GetThemeValue } from './contextTheme';

const SearchInput = ({onsearch}) => {
    const [input, setInput] = useState('')
    const {darkTheme} = GetThemeValue()

    const handleSubmit = (e) => {
        e.preventDefault()
        onsearch(input)
    }

  return (
         <form className="relative w-full" onSubmit={handleSubmit}>
              <input 
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Search for a Country...'
                className={` mt-5 sm:ml-1 md:ml-1 lg:ml-1 block h-11 pl-14 w-full sm:w-[50%] md:w-[40%] lg:w-[30%] justify-center mx-auto text-sm text-brown ${darkTheme ? 'bg-[#FFFFFF]' : 'bg-[#2B3844]'} rounded-lg focus:outline-none `} />
                <button className="absolute ml- top-0 left-0 p-2.5 px-2 text-sm font-medium h-full text-brown">
                <img src={logo1} alt='' className=' sm:mt-3 md:mt-3 lg:mt-3 ml-6 sm:ml-3 md:ml-3 lg:ml-3' />
                </button>
          </form>
  )
}

export default SearchInput