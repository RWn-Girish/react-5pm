import { useEffect, useState } from "react";

const Counter = ({name, email}) => {
    // console.log("hook: ",useState());
    // console.log(props);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count => count + 1)    // 0 => 1
        console.log('Click...');
    }

    const handleDec = () => {
        setCount(count => count - 1)    // 0 => 1
        console.log('Click...');
    }
    
    //everytime anychanged
    // useEffect(()=> {
    //     console.log("Mounting....");
    // })

    // useEffect(()=> {
    //     console.log("Only Once when Component mounting");
    // }, []);

    useEffect(()=> {
        console.log(" when Component updating");
    }, [count]);

    return(
        <div>
            <h2>{name}</h2>
            <h1>Counter App  : {count}</h1>
            <p>{email}</p>
            <button onClick={handleClick}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
};

export default Counter;