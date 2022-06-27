import React from 'react'
import SupeChild from './SupeChild'

const Child = (props) => {
    
    const saveInputHandler = (enteredInput) => {
        console.log(enteredInput);
        props.onAddInput(enteredInput)
    }
    
    return (
    <div><SupeChild onSaveData={saveInputHandler} /></div>
  ) 
}

export default Child