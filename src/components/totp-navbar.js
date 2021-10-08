import SLButton from '@shoelace-style/react/dist/button';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/" className="hmbtn"><img src="./../public/WWF_Logo_Horizontal.png" alt="Home button" /></a>
            <div className="links">
                <a href="/aboutus">About us</a>
                <a href="/natureinDecline">Nature in decline</a>
                <a href="/whybother">Why bother?</a>
                <SLButton type="success">How can I help?</SLButton>
            </div>
        </nav>
     );
}
 
export default Navbar;    