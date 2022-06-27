import React, { useState } from 'react';

const SupeChild = (props) => {
    const [input, setInput] = useState('');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submissionHandler = (e) => {
        e.preventDefault();
        props.onSaveData(input);
    }
    return (
        <>
            <form onSubmit={submissionHandler}>
                <input type='text' value={input} onChange={inputHandler} />
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default SupeChild