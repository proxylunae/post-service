import React, {useState} from 'react';



const Input = () => {

    const [value, setValue] = useState('');

    return (
        <div>
            <h3 style={{opacity: .5, color: "lightcoral"}}>FunctionalComponentInput</h3>
            <h1>{`event.target.value: ${value}`}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
        </div>
    );
};

export default Input;