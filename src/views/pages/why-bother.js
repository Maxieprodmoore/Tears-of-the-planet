import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';

const whyBother = () => {
    return (  
        <div>
            <h2>Why does it matter?</h2>

            <div className="infoDump">
                <p>
                    Our living planet operates as a living system that created and maintained the living conditions allowing us to thrive. 
                    Biodiversity is a very important part of this system, and it cannot work in the same way if the amount of wildlife and their habitats is reduced.
                </p>
                <p>
                    Additionally, Biodiversity brings lots of direct benefits that we will lose if we continue to destroy the natural world.
                    <br /> 
                    But we are lately being made aware of other problems caused by that imbalance and loss of biodiversity:
                </p>
                <p>
                    In general, Climate change has not been a major factor in the decline of biodiversity up to this point, 
                    but scientists are now seeing the effects of rising temperatures on wildlife and it is clear that many species will face problems in the years ahead. 
                    <br />
                    Species that are used to certain conditions are shifting their ranges, with knock-on effects on other ecosystems. 
                    <br />
                    For the species that are unable to do this, they are struggling to survive the changes to their habitat.

                </p>
                <p>
                    In 2019, Africa had its largest outbreak of desert locusts in decades when unusually heavy rainfall in the Arabian Peninsula created perfect breeding grounds for the locusts, 
                    <br />
                    which migrated to East Africa and South Asia causing widespread crop devastation in their wake.

                </p>
                <p>
                    Australia experienced one of the most intense bushfire seasons ever recorded that year, with unusually low rainfall, record-high temperatures 
                    and excessive logging worsening the crisis to the point more than 10 million hectares was burnt and huge numbers of wild animals were killed.
                </p>
                <p>
                    In 2020, CoVID-19 was a previously unknown coronavirus. But it rose to prominence by causing a world-wide pandemic that affected everyone and brought the world to its knees. 
                    <br />
                    In fact, 60% of recent large-scale outbreaks of diseases, including COVID-19, come from animals, and crossover into human populations because of the way we are destroying habitats, harvesting wildlife and farming livestock.
                </p>
                <p>
                    All of these disasters (and other natural disasters that have slipped past our radar due to CoVid-19 being more prominent) have been the result of human-induced damage to the natural world, 
                    and experts believe that if we keep this abuse up, nature will lash out more frequently and with more severe versions of those problems.  
                </p>
                <p>As such, we need to start saving the environment if we are to save ourselves.</p>
                <p>
                    For starters, we need to be aware that as conditions change because of climate change, some species will not survive. 
                    But if we have a wide variety and number of different species in an ecosystem, there’s a higher chance that some species will survive and take the place of those that are lost, thereby allowing the overall ecosystem to survive.

                </p>
                <p>
                    We also need to be aware that many important advances in science come about because of chemicals and materials discovered in nature. 
                    <br />
                    This means every species out there has the potential to offer vital solutions to our future challenges, and thus, 
                    we must be careful to preserve them and their environments least they are lost to the harm we are causing before we have the chance to discover what they can offer us. 
                </p>

            </div>

            <div className="sectionBtns">
                <SlButtonGroup>
                    <SlButton size="medium" href="nature-in-decline">Previous section</SlButton>
                    <SlButton size="medium" href="/">Back to home page</SlButton>
                    <SlButton size="medium" href="how-i-can-help">Next section</SlButton>
                </SlButtonGroup>
            </div>
            
        </div>
        
    );
}
 
export default whyBother;