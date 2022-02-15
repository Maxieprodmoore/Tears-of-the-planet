import { useState } from 'react';
import {Link} from 'react-router-dom';
import {SlButton, SlIconButton, SlDrawer} from '@shoelace-style/shoelace/dist/react';
import {ReactComponent as Logo} from './../images/WWF_Logo_Vertical.svg';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return ( 
        <div >
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
                        <SlButton type="success" >How can I help?</SlButton>
                    </Link>
                                
                </div>
                <SlIconButton id="Hmburger" name="list" onClick={() => setOpen(true)}/>
            </nav>
            <SlDrawer open={open} onSlAfterHide={() => setOpen(false)} id="HmburgerDrawer">
                <Link to="/about-this-page">About this page</Link>
                <Link to="/nature-in-decline">Nature in decline</Link>
                <Link to="/why-it-matters">Why it matters</Link>
                <Link to="/how-i-can-help">
                    <SlButton type="success" >How can I help?</SlButton>
                </Link>
                <SlButton slot="footer" type="primary" onClick={() => setOpen(false)}>
                    Close
                </SlButton>
            </SlDrawer>
        </div>
        
        

    );
}
 
export default Navbar;    