import React from 'react';
import './surprise.css';

function Surprise() {
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
