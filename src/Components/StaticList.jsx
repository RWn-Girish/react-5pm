import { useState } from "react";
// <> </> -> Fragment
const StaticList = ({listItems}) => {
    
    return (
        <>  
            <h1>Static List Items</h1>
            <ul>
                <li>{listItems[0]}</li>
                <li>{listItems[1]}</li>
                <li>{listItems[2]}</li>
                <li>{listItems[3]}</li>
                <li>{listItems[4]}</li>
            </ul>
        </>
    )
};

export default StaticList;