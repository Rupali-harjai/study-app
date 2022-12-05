import { useState } from 'react';
import '../Components/Dropdown.css';


function Dropdown({ selected, setSelected,selectedChp, setChpSelected }) {
    const [isActive, setIsActive] = useState(false);
    const optionsSub = ["Maths", "English", "Science","Social-Studies", "Hindi"];
 
    return (
<div className ="dropdown-box">
     
        <div className = "dropdown" >
        <div className="dropdown-btn" onClick={(e) =>
            setIsActive(!isActive)}>
            {selected}
            <span className="fas fa-caret-down"></span>
        </div>
    {isActive && (
                <div className = "dropdown-content">
            {optionsSub.map( (option) => (
                    <div 
                    onClick={(e) =>{
                        setSelected(option);
                        setIsActive(false);
                }}
            className = "dropdown-item">
                {option}
                    </div>
                    ) ) }


                    
                    </div>
                    )}


                

                    </div>
                    
                    </div>
                    );

                    
}



export default Dropdown;