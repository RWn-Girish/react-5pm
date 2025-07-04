import { useState } from "react";

const ControlledComp = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit Data");
        console.log("Full Name: ", fname)
        console.log("Email: ", email)
        console.log("Password: ", password)
    }

    const handleFname = (e) => {
        setFname(e.target.value);
    }

    return(
        <>
            <h1>Controlled Component</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" value={fname} onChange={handleFname} />
                <br  />
                <br  />
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br  />
                <br  />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ControlledComp;