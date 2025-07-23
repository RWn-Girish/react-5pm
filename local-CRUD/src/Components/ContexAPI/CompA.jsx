import { createContext } from "react";
import CompB from "./CompB";

export const userContext = createContext();

const CompA = () => {
    let user = {
        name: "John Peter",
        age: 15,
        email: "john@test.in"
    }
    let count = 10
    return (
        <>
           <userContext.Provider value={{user: user, counter: count}}>
                <h1>Component A</h1>
                <p>User Name: {user.name}</p>
                <li>user Email: {user.email}</li>
                <CompB />
           </userContext.Provider>
        </>
    )
};

export default CompA;