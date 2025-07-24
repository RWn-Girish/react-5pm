import { useReducer, useState } from "react";
import { counterReducer } from "./counterReducer";

const CounterApp = () => {
    // const [count, setCount] = useState(10)
    const [count, dispatch] = useReducer(counterReducer, 100)
    const handleInc  = () => {
        // setCount(count => count + 1)
        dispatch({
            type: "INC"
        })
    }
    const handleDec  = () => {
        // setCount(count => count - 1)
        dispatch({type: "DEC"})
    }

    return (
        <>
            <h2>Counter App: {count}</h2>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </>
    )
};

export default CounterApp;