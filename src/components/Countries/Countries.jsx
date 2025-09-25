import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (country) => {
    // setVisitedCountries(country)
    const newVisitedCountries = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountries)
  }

  const countriesData = use(countriesPromise)
  const countries = countriesData.countries
  return (
    <div>
      <h1>Countries : {countries.length}</h1>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(visitedCountry => <li>{visitedCountry.name.common}</li>)
        }
      </ol>
      <div className='countries'>
        {
          countries.map(country => <Country 
          country={country}
          handleVisitedCountries={handleVisitedCountries}
          ></Country>)
        }
      </div>
    </div>
  );
};

export default Countries; 