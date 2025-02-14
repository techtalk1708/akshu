import React from 'react';
import data from './special_data.json';
import './special.css'

function Special() {
  return (
    <div className='special-parent'>
      <h1 style={{fontSize:50, color:'purple'}}>Our Special Moments of 1 Year Sumed Up Here</h1>
      {data.map(item => (
        <Card key={item.id} image_url={item.image_url} description={item.description} />
      ))}
    </div>
  );
}

function Card({ image_url, description }) {
  return (
    <div className='card'>
      <img src={require(`./${image_url}`)} alt={description} className='card-img'/>
      <p style={{textAlign:'center', padding:5}} className='card-text'>{description}</p>
    </div>
  );
}

export default Special;
