import React from 'react'
import { Link } from 'react-router-dom'

const RestraunentCards = ({Id, Name, Imageid, rating ,location }) => {
  return (
    <div>
      <Link to={`/menu/${Id}`}>
      <div className="card transition-transform hover:scale-110 w-[20vw] h-[60vh] flex  flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden my-4 mx-4">
        <div className="name">
          <p className='text-[1.5vw] text-center font-bold'>{Name}</p>
        </div>
        <img  className="h-[40vh] w-[20vw] object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + Imageid} />
        <div className="rating">
          Rating is : {rating}
        </div>
        <div className="location">
          <h6>{location}</h6>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default RestraunentCards