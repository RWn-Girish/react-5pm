import { useRef } from "react";

const UnControlledComp = () => {
    const fnameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Submit Event");
        console.log("Full name: ", fnameRef.current.value);
        console.log("Email: ", emailRef.current.value);
        console.log("Password: ", passRef.current.value);
    }
    return (
        <>
            <h1>UnControlled Component</h1>
            <form onSubmit={handleSubmit}>
                <label>Full Name:</label>
                <input type="text" ref={fnameRef} />
                <br  />
                <br  />
                <label>Email:</label>
                <input type="text"  ref={emailRef} />
                <br  />
                <br  />
                <label>Password:</label>
                <input type="password" ref={passRef}  />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
};

export default UnControlledComp;