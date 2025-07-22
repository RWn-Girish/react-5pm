import { useCallback, useState } from "react"
import Button from "./Button";
import ExtraDetail from "./ExtraDetail";

const Counter = () => {
    const [count, setCount] = useState(100);
    const handleInc = useCallback(() => {
        setCount(count => count + 1)
    },[])
    const handleDec = useCallback(() => {
        setCount(count => count - 1)
    }, []);

    return(
        <>
            <h1>Counter APP: {count}</h1>
            <ExtraDetail />

            {/* <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button> */}
            <Button name="Increment" handleClick={handleInc} />
            <Button name="Decrement" handleClick={handleDec} />
        </>
    )
};

export default Counter;