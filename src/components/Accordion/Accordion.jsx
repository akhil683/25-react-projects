import React, { useState } from 'react'
import data from '../Accordion/data'

const Accordion = () => {
  const [ selected, setSelected ] = useState(null)
  const [ enableMultiSelection, setEnableMultiSelection ] = useState(false)
  const [ multiSelected, setMultiSelected ] = useState([])

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId)
  } 

  const handleMultiSelection = (currentId) => {
    let cpyMultiple = [...multiSelected]
    const findIndexOfCurrentId = cpyMultiple.indexOf(currentId)

    if(findIndexOfCurrentId === -1) cpyMultiple.push(currentId)
    else cpyMultiple.splice(findIndexOfCurrentId, 1)

    setMultiSelected(cpyMultiple)
  }

  return (
   <div className='flex flex-col justify-center items-center min-h-screen'>
      <h2 className='text-3xl text-red-400 uppercase font-semibold'>Accordion</h2>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className='mb-6 mt-2 px-3 py-1 text-white bg-green-500 rounded-md'>Enable Multi-selection</button>
      <div className='flex justify-center flex-col items-center gap-6'>
        {
          data && data.length > 0  
            ? data.map(dataItem => <div key={dataItem.id} className='flex flex-col justify-center px-4 py-2 bg-blue-400 w-[400px]'>
              <div 
                onClick={() => enableMultiSelection 
                  ? handleMultiSelection(dataItem.id) 
                  : handleSingleSelection(dataItem.id)
                } 
                className='flex gap-2 justify-between text-xl font-semibold cursor-pointer'>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
              </div>
              {
                selected === dataItem.id || multiSelected.indexOf(dataItem.id) !== -1
                ? <p className='mt-2'>{dataItem.answer}</p>
                : null
              }
            </div>) 
            : <div>No data found</div>
        }
      </div>
   </div>
  )
}

export default Accordion
