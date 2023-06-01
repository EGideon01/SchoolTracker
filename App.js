import './App.css';
import React, { useState } from 'react';

const Assignment = () => {
  const [input, setInput] = useState("")
  const [submittedInput, setSubmittedInput] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value) // Updates state every key stroke
  }
  
  const handleClick = () => {
    setSubmittedInput(input) // updates our list of submitted input with the typed word from the state "input"
  }

  const inputList = submittedInput.map((input) => {
    <p key={55}>{input}</p>
  }) // We have to insert a "key" for each list item, otherwise react spits out errors

  return(
    <div id="Assignment">
      <input type="text" onchange={handleChange}/><input/>
      <button type="submit" onclick={handleClick}>Submit</button>
      <div id="InputArea">
        {inputList}
      </div>
    </div>
  )
}

export default Assignment
