import SLButton from '@shoelace-style/react/dist/button';

const Home = () => {
    return ( 
        <div id="intro">
            <h1 className="introTitle">Presenting: Tears of the Planet</h1>
            <h5 className="introTitle">A condensation of the WWF and Living Planet report 2020 edition.</h5>
            <h4>
                Nature is in decline. And if it gets any worse, everyone suffers.
                <br />
                You might be afraid, but that's ok! Get friends and/or family members to walk down this path if you need to.
                <br />
                But we need to get started. And with your help adding to the multitude of others before you, we can start
                taking the first steps towards recovery.
            </h4>
            <h4>
                Are you ready to take the plunge into the information needed to leading the charge to heal our mother Earth?
            </h4>
            <SLButton size="medium" href="/about-us">
                <strong>Let's Get Started!</strong>
            </SLButton>

        </div>
        
     );
}
 
export default Home;