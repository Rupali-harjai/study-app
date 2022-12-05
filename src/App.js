import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import Buttons from './Components/Buttons';
import QuestionImage from './Components/QuestionImage';
// import Dropdown from './Components/Dropdown';




const App = () => {
  // const [selected,setSelected] =useState("Choose One")
  return (
  <>
          <Navbar/>
          <Buttons/>
          <QuestionImage/>
          {/* <Dropdown selected ={selected} setSelected={setSelected}/> */}
          </>
  )
}

export default App