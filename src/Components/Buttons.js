import React from 'react'
import '../Components/Button.css';
import Dropdown from '../Components/Dropdown';
import { useState } from 'react';

const Buttons = () => {
  const [selected, setSelected] = useState("Subject")

  return (
    <div className="container-fluid button-group">
   
   
   <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
  <div className="btn-group me-2" role="group" aria-label="First group">
  
    <Dropdown selected  = {selected} setSelected = {setSelected} />
  
  </div>
  <div className="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" className="btn btn-outline-secondary">Chapter</button>

  </div>
  <div className="btn-group me-2" role="group" aria-label="Third group">
    <button type="button" className="btn btn-outline-secondary">Type Of Question</button>
  </div>

  <div className="btn-group" role="group" aria-label="Fourth group">
    <button type="button" className="btn btn-outline-secondary">Sources</button>
  </div>
</div>

  </div>
  )
}

export default Buttons
