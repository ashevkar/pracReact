import React, { useState, useEffect } from 'react';
import axios from 'axios';


const city = () => {
    const [cities, setCities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/getData')
      .then(response => {
        setCities(response.data.data);
      })
      .catch(error => {
        setError('Error fetching data');
        console.error(error);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
    <h1>City List</h1>
    <ul>
      {cities.map(city => (
        <li key={city.ID}>{city.Name}, {city.CountryCode}</li>
      ))}
    </ul>
  </div>
);
};


export default city