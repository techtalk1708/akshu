import React from 'react';
import './surprise.css';

function Surprise() {
  const images = [
    './1.jpg',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100'
  ];

  const tableStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: '2px solid #000',
    width: 'max-content'
  };

  const imageContainerStyle = {
    width: '100px',
    height: '100px',
    border: '2px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '90%',
    height: '90%',
    objectFit: 'cover'
  };

  return (
    <div className='surprise-parent'>
      <table className='simple-table'>
        <tbody className='table'>
          <tr className='row'>
            <td>
              <div className='table-container'>
                <img src={require('./animal.jpg')} className='table-img' />
                <p className='table-text'>Animal</p>
              </div>
            </td>
            <td><div className='table-container'>
                <img src={require('./placee.jpg')} className='table-img' />
                <p className='table-text'>Place</p>
              </div></td>
            <td><div className='table-container'>
                <img src={require('./plant.jpg')} className='table-img' />
                <p className='table-text'>Plant</p>
              </div></td>
          </tr>
          <tr className='row'>
            <td>
              <div className='table-container'>
                <img src={require('./character.jpg')} className='table-img' />
                <p className='table-text'>Character</p>
              </div>
            </td>
            <td><div className='table-container'>
                <img src={require('./season.webp')} className='table-img' />
                <p className='table-text'>Season</p>
              </div></td>
            <td><div className='table-container'>
                <img src={require('./hobby.jpg')} className='table-img' />
                <p className='table-text'>Hobby</p>
              </div></td>
          </tr>
          <tr className='row'>
            <td>
              <div className='table-container'>
                <img src={require('./13.jpg')} className='table-img' />
                <p className='table-text'>Food</p>
              </div>
            </td>
            <td><div className='table-container'>
                <img src={require('./colour.webp')} className='table-img' />
                <p className='table-text'>Colour</p>
              </div></td>
            <td><div className='table-container'>
                <img src={require('./drink.webp')} className='table-img' />
                <p className='table-text'>Drink</p>
              </div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Surprise;
