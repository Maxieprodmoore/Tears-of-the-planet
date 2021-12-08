import SLButton from '@shoelace-style/react/dist/button';
import {Link} from 'react-router-dom';

const Home = () => {
    /*------------------ Link to next section--------------------------------*/
    
    return ( 
        <div id="introImg">
            <div id="introTxt">
                <h1 className="introTitle">Presenting: Tears of the Planet</h1>
                <h3 className="introTitle">A condensation of WWF's Living Planet Report 2020.</h3>
                <h4>
                    Nature is in decline. And if it gets any worse, everyone suffers.
                </h4>
                <h4>
                    The path may seem daunting and you might be afraid...                     
                </h4>
                <h4>
                    But that's alright! Get friends and/or family members to walk down this path if you need to.                   
                </h4>
                <h4>
                    That said, we need to get started. And with your help alongside the multitude of others before you, 
                    we can make the first steps towards recovery.
                </h4>
                <h5>
                    Are you ready to take the plunge into the information needed to lead the charge to heal Mother Earth?
                </h5>
                <div className="sectionBtns">
                    <Link to="/about-this-page">
                        <SLButton size="medium" >
                            <strong>Let's Get Started!</strong>
                        </SLButton>
                    </Link>
                    
                </div>
            </div>
                        
        </div>
        
     );
}
 
export default Home;