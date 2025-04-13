import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Axios.get('http://localhost:3001/getData');
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>City Data</h1>
      <ul>
        {data.map((city, index) => (
          <li key={index}>
            {city.Name} - {city.CountryCode} - {city.District} - {city.Population}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
