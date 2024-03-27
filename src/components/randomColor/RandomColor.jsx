import React, { useState } from 'react'

const RandomColor = () => {
   const [ typeOfColor, setTypeOfColor ] = useState('hex')
   const [ color, setColor ] = useState('#000000')

   const handleCreateHexColor = () => {
      const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']
      let hexcolor = '#'
      for (let i = 0; i < 6; i++) {
         const randomNumber = Math.floor(Math.random() * hex.length)
         hexcolor += hex[randomNumber]
      }
      setColor(hexcolor)
   } 
   const handleCreateRgbColor = () => {
      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      const rgbColor = `rgb(${r}, ${g}, ${b})`
      setColor(rgbColor)
   }

  return (
    <div className='bg-black pt-4 text-white min-h-screen' style={{
      background: color
    }}>
      <div className='flex justify-center gap-4'>
         <button onClick={() => setTypeOfColor('hex')} className='px-2 py-1 rounded-md bg-blue-400'>Create HEX color</button>
         <button onClick={() => setTypeOfColor('rgb')} className='px-2 py-1 rounded-md bg-blue-400'>Create RGB color</button>
         <button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor} className='px-2 py-1 rounded-md bg-blue-400'>Generate Random color</button>
      </div>
      <h2 className='text-5xl mt-16 text-center'>{color}</h2>
    </div>
  )
}

export default RandomColor
