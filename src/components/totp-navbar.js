import SLButton from '@shoelace-style/react/dist/button';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from './../images/WWF_Logo_Vertical.svg';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <Logo className="hmbtn" onClick={(e) => {
                e.preventDefault();
                window.location.href='/';
            }}/>
            <div className="links">
                <Link to="/about-this-page">About this page</Link>
                <Link to="/nature-in-decline">Nature in decline</Link>
                <Link to="/why-it-matters">Why it matters</Link>
                <Link to="/how-i-can-help">
                    <SLButton type="success" >How can I help?</SLButton>
                </Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;    