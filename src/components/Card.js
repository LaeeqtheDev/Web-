import React from 'react';
import { Link } from 'react-router-dom';
import Sami from '../assets/sami.jpg'


function Card({ product }) {
 

  return (
    <Link
 
    >
      <div className="bg-white shadow-md rounded-md overflow-hidden max-w-xs mx-10">
        <img className="w-full h-64 object-contain" src={Sami} alt='product' />
        <div className="p-6">
          <h2 className="text-2xl font-semibold whitespace-nowrap">Sami Haider</h2>
          <p className="mb-2 font-semibold"><span className='text-red-500'>Category:</span>18+ </p>
          <p className="text-gray-700 mb-2 font-semibold"><span className='text-red-500'>Price:</span>$4500.99 </p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Add to Wishlist
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
