import { Link } from "react-router-dom/cjs/react-router-dom";

const Header  = ()=>{
    return(
        <div className="header">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/side">Log in</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}
export default Header