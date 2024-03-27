import React from 'react'
import Accordion from './components/Accordion/Accordion'
import RandomColor from './components/randomColor/RandomColor'
import StartRating from './components/startRating/StartRating'
import ImageSlider from './components/image-slider/ImageSlider'
 
const App = () => {

  return (
    <>
      {/* ACCORDION  */}
      <Accordion />

      {/* RANDOM COLOR  */}
      <RandomColor />

      {/* START-RATING  */}
      <StartRating number={8} />

    {/* IMAGE-SLIDER */}
      <ImageSlider />
    </>
  )
}

export default App
