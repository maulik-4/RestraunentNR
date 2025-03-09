import React from 'react'

const RestraunentCards = ({ Name, Imageid, rating ,location }) => {
  return (
    <div>
      <div className="card w-[20vw] h-[60vh] flex  flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-4">
        <div className="name">
          <p className='text-[2vw] font-bold'>{Name}</p>
        </div>
        <img  className="h-[40vh] w-[20vw] object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + Imageid} />
        <div className="rating">
          Rating is : {rating}
        </div>
        <div className="location">
          <h6>{location}</h6>
        </div>
      </div>
    </div>
  )
}

export default RestraunentCards