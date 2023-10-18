
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ul id="Nav">
            <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
            <li><Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link></li>
            <li><Link to="/signup" style={{ textDecoration: "none", color: "white" }}>SignUp</Link></li>
        </ul>
    )
}

export default NavBar