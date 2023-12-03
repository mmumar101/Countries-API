import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'




function CountryInfo() {
  const [country, setCountry] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')


  const {countryName} = useParams()
  
  const getCountryByName = async() => {
    try {
      const res = await fetch(`${'https://restcountries.com/v3.1'}/name/${countryName}`)

      if(!res.ok) throw new Error('Could not Find Country')

      const data = await res.json()

      setCountry(data)
      setIsLoading(false)
      
    } catch (error) {
      setIsLoading(false)
      setError(error.messege)
      
    }
  }

  useEffect(()=>{
    getCountryByName()
  })


  
  return (
        <div className='ml-5'>
          <Link to='/' className='font-bold'>Back</Link>

        <div className='mt-8'>
          {
          country?.map((country, index) =>(
            <div>
              <div>
                <img src={country.flags.png} alt='' />
              </div>

              <div className='mt-8'>
                <h5>Native Name:  <span>{country.name.common}</span></h5>
                <h5>Population:  <span>{country.population}</span></h5>
                <h5>Region:  <span>{country.region}</span></h5>
                <h5>Sub Region:  <span>{country.subRegion}</span></h5>
              </div>


            </div>
          ))
          }
          </div>
        </div>


    
  )
}

export default CountryInfo