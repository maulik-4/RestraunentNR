import React from 'react';
import { Link } from 'react-router-dom';

const RestraunentCards = ({ Id, Name, Imageid, location, rating }) => {
  return (
    <Link className='text-black !no-underline' to={`/menu/${Id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[300px] p-4 transition-transform hover:scale-105">
        {/* Restaurant Image */}
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + Imageid}
          alt={Name}
          className="w-full h-40 sm:h-48 object-cover rounded-md"
        />

        {/* Restaurant Details */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold text-gray-800">{Name}</h3>
          <p className="text-sm text-gray-600">{location}</p>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-md">
              ⭐ {rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const IsopenRestraunent = (RestraunentCards) => {
  return (props) => {
    return (
      <>
        <div className='flex flex-column relative items-center'><label className='absolute top-[1%] z-50  left-[5%]'>Opened </label>
        <RestraunentCards {...props} /></div>
      </>
    );
  };
};

export default RestraunentCards;