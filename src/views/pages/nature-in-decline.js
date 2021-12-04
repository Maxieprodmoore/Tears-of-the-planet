import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';

const natureInDecline = () => {
    return (  
        <div className="content">
            <h2>Nature in Decline</h2>
            <p>We've been enjoying a stable climate and comfortable living conditions because of a very complex living system that is mother Earth.
               Biodiversity is vital to the system, as we rely on living things and the complex interactions between them, for clean air, fresh water, 
               a breathable atmosphere and the conditions needed to grow food.
            </p>

            <div className="infoDump">
                <div className="infoBtns">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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
                <div className="sectionBtns">
                    <SlButtonGroup>
                        <SlButton size="medium">Previous section</SlButton>
                        <SlButton size="medium" href="/">Back to home page</SlButton>
                        <SlButton size="medium">Next section</SlButton>
                    </SlButtonGroup>
                </div>                
            </div>
        </div>
        
    );
}
 
export default natureInDecline;