import { useRef } from "react";

const DynamicList = ({listItems}) => {
    let inputRef1 = useRef();
    let inputRef2 = useRef();


    const handleClick = () => {
        console.log('Click  =>>>>> ', inputRef1.current.value);
        console.log('Click  =>>>>> ', inputRef2.current.value);

        // inputRef.current.style.border = "1px dashed red"
        inputRef1.current.value = ""
        inputRef2.current.value = ""
    }

    return (
        <>
            <h2 >Dynamic List Items</h2>
            <ol>
                {
                listItems.map(list => {
                    return (
                        <li key={list}>{list}</li>
                    )
                })
            }
            </ol>
            <input type="text" ref={inputRef1}  />
            <input type="text" ref={inputRef2}  />
            <button onClick={handleClick}>Click</button>
        </>
    )
};


export default DynamicList;