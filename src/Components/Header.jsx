import { Link } from "react-router";

const Header = () => {
    return (
        <>
            <Link to={"/"}>Home</Link> &nbsp;&nbsp;
            <Link to={"/about"}>About</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link> &nbsp;&nbsp;
        </>
    )
}

export default Header;