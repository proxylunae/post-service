import React, {useState} from 'react';



const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>
            <h3 style={{opacity: .5, color: "lightcoral"}}>FunctionalComponentCounter</h3>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
};

export default Counter;