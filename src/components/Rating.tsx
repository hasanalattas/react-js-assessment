import React from 'react'
import { FaStar } from 'react-icons/fa'

type RatingProps = {
  rating: number
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="bg-gray-100 rounded-xl px-1.5 py-1 flex flex-row flex-grow-0 items-center justify-start w-fit gap-0.5">
      <div className="text-sm font-semibold text-gray-700">{rating.toFixed(1)}</div>
      <div>
        <FaStar size={14} className=" text-yellow-400" />
      </div>
    </div>
  )
}

export default Rating
