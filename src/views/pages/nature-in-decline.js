import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';
import soilImg from './../../images/moleDirtImg-Thumbnail.png';
import foodImg from './../../images/deforestationImg-Thumbnail.png';
import seaImg from './../../images/dolphinsImg-Thumbnail.png';
import freshWaterImg from './../../images/freshwaterDuckImg-Thumbnail.png';

{'/*--------------------------Decline regarding Soil inhabitants------------------------*/'}
const detailsSoil_header = 'Cries from the ground'
const detailsSoil_Para1 = 'Soil is an essential part of the natural environment. Healthy soil filters water, help keep greenhouse gases from building up in the atmosphere and allow plants to grow – including our food.'
const detailsSoil_Para2 = 'Where does the healthy soil come from? The decomposers within the soil are responsible for helping to break down dead plants and animals into that soil while other denizens are responsible for the incredible contribution soil makes to human well-being and the health of the rest of the planet. And even if they live on the surface, 90% of them live part of their life cycles in the soil.'
const detailsSoil_Para3 = 'Thus, by understanding how and when our actions harm soil biodiversity, we can start making changes that help the soil’s inhabitants recover.'

{'/*--------------------------Decline regarding Denizens of the Deep inhabitants------------------------*/'}
const detailsSea_header = 'Cries of the Sea creatures'
const detailsSea_Para1 = 'Overfishing, pollution, invasive species, deep-sea mining and increasing temperatures resulting from climate change are taking a devastating toll on the rich and varied wildlife of the ocean.'
const detailsSea_Para2 = 'Healthy oceans filled with life help out with slowing down climate change and driving global weather systems, as well as providing livelihoods for more than 10% of the world’s population. For instance, Coral reefs, threatened by rising temperatures and coastal developments, provide vital protection from storm surges and waves for nearly 200 million people, as well as helping to support the entire ocean ecosystem.'
const detailsSea_Para3 = 'As losing our ocean biodiversity affects every living thing on the planet, we need Marine Protected Areas (MPAs) to create wild spaces and restore the ocean’s natural balance. We also need to end plastic pollution and destructive fishing practices.'

{'/*--------------------------Decline regarding freshWater inhabitants------------------------*/'}
const detailsFreshWater_header = 'Freshwater woes'
const detailsFreshWater_Para1 = 'Freshwater wildlife populations have declined by 84% on average from 1970s onwards. Almost one in three freshwater species are threatened with extinction, with larger animals such as hippos, river dolphins, sturgeon and beavers being generally the most at risk.'
const detailsFreshWater_Para2 = 'Despite how important water is for life and health, freshwater ecosystems are sadly the most threatened on Earth, with 90% of wetlands being lost since the 1700s and the altering of river flows being major factors for that. But if we help to protect critical wetland habitats and end overfishing, we would be on a great start in helping freshwater habitats recover.'
const detailsFreshWater_Para3 = ''

{'/*--------------------------Decline regarding Denizens of the Deep inhabitants------------------------*/'}
const detailsFood_header = 'Food woes'
const detailsFood_Para1 = '1 third of Earth’s land is dedicated to farming crops and livestock, accounting for 75% of our freshwater usage. Unfortunately, out of all the food we produce, ⅓ of it is never eaten.'
const detailsFood_Para2 = 'This is an issue as Food waste is responsible for roughly 8% of greenhouse gases added to the atmosphere, including gases released via decomposition.'
const detailsFood_Para3 = ''

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
                        <h3>{detailsSoil_header}</h3>
                        <p>{detailsSoil_Para1}</p>
                        <p>{detailsSoil_Para2}</p>
                        <p>{detailsSoil_Para3}</p>
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