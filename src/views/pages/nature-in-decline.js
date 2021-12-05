import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';
import soilImg from './../../images/moleDirtImg-Thumbnail.png';
import foodImg from './../../images/deforestationImg-Thumbnail.png';
import seaImg from './../../images/dolphinsImg-Thumbnail.png';
import freshWaterImg from './../../images/freshwaterDuckImg-Thumbnail.png';

const detailsSoil = 'Soil is an essential part of the natural environment. Healthy soil filters water, help keep greenhouse gases from building up in the atmosphere and allow plants to grow – including our food. Where does the healthy soil come from? The decomposers within the soil are responsible for helping to break down dead plants and animals into that soil while other denizens are responsible for the incredible contribution soil makes to human well-being and the health of the rest of the planet. And even if they live on the surface, 90% of them live part of their life cycles in the soil. Thus, by understanding how and when our actions harm soil biodiversity, we can start making changes that help the soil’s inhabitants recover.'

const natureInDecline = () => {
    return (  
        <div>
            <h2>Nature in Decline</h2>
            <p>We've been enjoying a stable climate and comfortable living conditions because of a very complex living system that is mother Earth.
               Biodiversity is vital to the system, as we rely on living things and the complex interactions between them, for clean air, fresh water, 
               a breathable atmosphere and the conditions needed to grow food.
            </p>

            <div className="infoDump">
                <div className="info">
                    <div className="infoBtns">
                        <img className="infoBtnsImgs" src={soilImg} alt="mole emerging from dirt" />
                        <img className="infoBtnsImgs" src={seaImg} alt="dolphins swimming in the sea" />
                        <img className="infoBtnsImgs" src={freshWaterImg} alt="duck in the water" />
                        <img className="infoBtnsImgs" src={foodImg} alt="A whole stack of logs in the forest" />
                        <p>We have been causing gamage on so many fronts.
                            <br />
                            Click on the pictures to uncover the damage we've done,
                            <br />
                            and why we need to reverse it!
                        </p>
                    </div>
                    <div className="infoDetails">
                        <p>90% of land dwellers spend part of their life cycle in the soil.</p>
                        <h3>The life under our feet</h3>
                        <p>Soil is an essential part of the natural environment.</p>
                    </div>
                </div>
                
                <div className="sectionBtns">
                    <SlButtonGroup>
                        <SlButton size="medium" href="/about-us">Previous section</SlButton>
                        <SlButton size="medium" href="/">Back to home page</SlButton>
                        <SlButton size="medium" href="/why-bother">Next section</SlButton>
                    </SlButtonGroup>
                </div>                
            </div>
        </div>
        
    );
}
 
export default natureInDecline;