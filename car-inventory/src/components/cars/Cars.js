import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cars.css';

function Cars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
    .get('/api/cars')
    .then( res => {
      setCars(res.data.data);
    })
    .catch( err => console.log( err ))
  }, []);

  console.log(cars);

  return (
    <div>
      <h1 className="center">Inventory of Cars</h1>
      <ul>
        { 
          cars.map( item => {
            // console.log(item.id)
            <li>{ item.id }</li>
          })
        }
      </ul>
    </div>
  );
}

export default Cars;
