import SLButton from '@shoelace-style/react/dist/button';

const Home = () => {
    return ( 
        <div id="introImg">
            <div id="introTxt">
                <h1 className="introTitle">Presenting: Tears of the Planet</h1>
                <h3 className="introTitle">A condensation of WWF's' Living Planet report 2020 edition.</h3>
                <h4>
                    Nature is in decline. And if it gets any worse, everyone suffers.
                    <br />
                    The path may seem daunting and you might be afraid. 
                    <br />
                    But that's ok! Get friends and/or family members to walk down this path if you need to.
                    <br />
                    But we need to get started. And with your help alongside the multitude of others before you, 
                    we can make the first steps towards recovery.
                </h4>
                <h4>
                    Are you ready to take the plunge into the information needed to lead the charge to heal Mother Earth?
                </h4>
                <div className="sectionBtns">
                    <SLButton size="medium" href="/about-us">
                        <strong>Let's Get Started!</strong>
                    </SLButton>
                </div>
            </div>
                        
        </div>
        
     );
}
 
export default Home;