import { Link, useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();

    const handleAbout = (data) => {
        let name = "John Peter"
        navigate(`/about/${data}`)
    }

    return (
        <>
            <Link to={"/"}>Home</Link> &nbsp;&nbsp;
            <Link to={"/about"}>About</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link> &nbsp;&nbsp;

            <button onClick={()=> handleAbout("hello")}>About</button>
            <button>Contact</button>
        </>
    )
}

export default Header;