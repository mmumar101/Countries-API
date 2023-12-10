import React, { useEffect, useState } from 'react'
import BaSun from '../images/BaSun.png'
import { GetThemeValue } from './contextTheme';
import logo from '../images/iconoir_half-moon.png';
import SearchInput from './SearchInput';
import FilterCountry from './FilterCountry';
import {Link}  from 'react-router-dom';
import { api } from './api';

//  apiUrl = 'https://restcountries.com/v3.1'

function AllCountries() {
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const {darkTheme, themeHandler} = GetThemeValue()
    

    const getAllCountries = async()=>{

      try {
        const res = await fetch(`${api}/all`)

        if(!res.ok) throw new Error('Something Went Wrong!')

        const data = await res.json()
        console.log(data)

        setCountries(data)

        setIsLoading(false)

      } catch (error) {

        setIsLoading(false)

        setError(error.messege)
        
      }
    }
 
    useEffect(()=>{
      getAllCountries()
    },[])

  
     const getCountryByName = async(countryName)=>{
      try {
        const res = await fetch(`${'https://restcountries.com/v3.1'}/name/${countryName}`)

      if(!res.ok) throw new Error('Country Not Found')

      const data = await res.json()

      setCountries(data)

      setIsLoading(false)

      } catch (error) {
        setIsLoading(false)
        setError(error.messege)
      }
    }

    const getCountryByRegion = async(regionName)=>{
      try {
        const res = await fetch(`${'https://restcountries.com/v3.1'}/region/${regionName}`)

        if(!res.ok) throw new Error('Failed......')

        const data = await res.json()

        setCountries(data)

        setIsLoading(false)
      } catch (error) {
  
        setIsLoading(false)

        setError(false)
        
      }
    }


  return (
    <div className=' mx-auto'>
      <div className={`w-full mx-auto flex ${darkTheme ? 'bg-[#FFFFFF]' : 'bg-[#2B3844]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} justify-between pb-7 pt-7`}>
        <div className='font-bold'>
          <h1 className='ml-4 text-sm'>Where in the World?</h1>
        </div>

        <div className='flex align-middle gap-2 pr-2 mr-2'>
          <img src={darkTheme ? logo : BaSun} alt='' className='w-6 h-6' onClick={themeHandler} />
          <h2>Dark Mode</h2>
        </div>
      </div> 
      
      {/* ================================= INPUT FIELD ================================ */}
      <div className=" w-[90%] mx-auto ">
        <div className='sm:flex md:flex lg:flex mb-12 justify-between mx-auto'>
         <SearchInput  onsearch={getCountryByName}/> 


        {isLoading && !error && <h4>Loading.........</h4>}
        {error && !isLoading && <h4>{error}</h4>}

         <FilterCountry onSelect={getCountryByRegion} /> 
        </div>

      <div className=' gap-8 grid grid-col-1 sm:grid-cols-3 mt-7 md:grid-cols-3 lg:grid-cols-4 '>
        {
          countries?.map(country =>(
         <Link to={`/country/${country.name.common}`} >
            <div className=''>
              <div className=''>
                <img src={country.flags.png} alt='' className='' />
              </div>

              <div key={countries.id} className={`${darkTheme ? 'bg-[#FFFFFF]' : 'bg-[#2B3844]'} ${darkTheme ? 'text-[#2B3844]' : 'text-[#F2F2F2]'} px-4 py-4 mx-auto justify-center align-middle `} >
                <h3 className='font-bold'>{country.name.common}</h3>
                <h5>Population: {country.population}</h5>
                <h5>Region: {country.region}</h5>
                <h5>Capital: {country.capital}</h5>
              </div>

            </div>
          </Link>
            ))
        }

      </div>
     
      </div>

    </div>
  );
};

export default AllCountries