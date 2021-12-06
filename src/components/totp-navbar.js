import SLButton from '@shoelace-style/react/dist/button';
import {Link} from 'react-router-dom';
import Logo from './../images/WWF_Logo_Horizontal.png';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <a href="/" className="hmbtn"><img src={Logo} alt="Home button" /></a>
            <div className="links">
                <Link to="/about-us">About us</Link>
                <Link to="/nature-in-decline">Nature in decline</Link>
                <Link to="/why-bother">Why bother?</Link>
                <Link to="/how-i-can-help">
                    <SLButton type="success" >How can I help?</SLButton>
                </Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;    