import { useState } from "react";

const ValidationComp = () => {
    const [inputForm, setInputForm] = useState({
        fname: "",
        email: "",
        password: "",
        mobileNo: ""
    })

    const handleChanged = (e) => {
        const {name, value} = e.target
        setInputForm({
            ...inputForm,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit ===> ', inputForm);
    }
    return (
        <>
            <h1>Validation Form</h1>
            <form onSubmit={handleSubmit}>
                <lable>Full Name:</lable>
                <input type="text" name="fname" value={inputForm.fname} onChange={handleChanged} />
                <br />
                <br />
                <lable>Email:</lable>
                <input type="text" name="email" value={inputForm.email} onChange={handleChanged} />
                <br />
                <br />
                <lable>Password:</lable>
                <input type="password" name="password" value={inputForm.password} onChange={handleChanged} />
                <br />
                <br />
                <lable>MobileNo:</lable>
                <input type="text" name="mobileNo" value={inputForm.mobileNo} onChange={handleChanged} />
                <br />
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
};

export default ValidationComp;