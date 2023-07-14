import React, { useState } from 'react';
import './Assignment.css';
import { v4 as uuidv4 } from 'uuid';
import { render } from '@testing-library/react';


const Assignment = () => {
  const [input, setInput] = useState('')
  const [submittedInput, setSubmittedInput] = useState([])
    
  const handleChange = (e) => {
    setInput(e.target.value) // Updates state every key stroke
  }
  
  const handleClick = () => {
    setSubmittedInput(submittedInput.concat([input])) // updates our list of submitted input with the typed word from the state "input"
  }

  const inputList = submittedInput.map((input) => 
    <p key={uuidv4()}>{input}</p>
    ) // We have to insert a "key" for each list item, otherwise react spits out errors
  
    const clearedArray = () => { 
      setSubmittedInput(submittedInput.filter(input => input.id != null))
    }
    
  return(
    <div id="Assignment">
      <input type="text" onChange={handleChange}/>
      <button type="submit" onClick={handleClick}>Submit</button>
      <div id="InputArea">
        {inputList}
      </div>
      <button type="submit" onClick={clearedArray}>Delete All Values</button>
    </div>
  )
}

export default Assignment

//This is a comment
