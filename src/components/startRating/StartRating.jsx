import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StartRating = ({ number }) => {
   const [ rating, setRating ] = useState(0)
   const [ hover, setHover ] = useState(0)

   const handleClick = (currentIndex) => {
      setRating(currentIndex)
   }
   const handleMouseEnter = (currentIndex) => {
     setHover(currentIndex) 
   }
   const handleMouseLeave = () => {
     setHover(rating) 
   }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      {
         [...Array(number)].map((_, i) => {
            const index = i + 1
            return <FaStar 
               key={index} 
               size={60}
               onClick={() => handleClick(index)}
               onMouseEnter={() => handleMouseEnter(index)}
               onMouseLeave={handleMouseLeave}
               className={index <= (hover || rating) ? 'text-yellow-500' : ''}
            />
         })
      }   
    </div>
  )
}

export default StartRating
