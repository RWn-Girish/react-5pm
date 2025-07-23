import { useContext } from "react";
import CompD from "./CompD";
import { userContext } from "./CompA";

const CompC = () => {
    const {user, counter} = useContext(userContext)
    return (
       <>
            <h1>Component C : {user.name}</h1>
            <h3>{counter}</h3>
            <CompD  />
       </>
    )
};

export default CompC;