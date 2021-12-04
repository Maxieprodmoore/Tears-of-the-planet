import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';

const aboutUs = () => {
    return (  
        <div className="content">
            <h2>A message from WWF's director:</h2>
            <div className="infoDump">
                <div className="message"></div>
                <div className="messagePhoto">
                    <img src="" alt="" />
                    <p>Marco Lamberti 
                        <br />
                        Director General, WWF International
                    </p>
                </div>
            </div>
            <div className="infoDump">
                <h2>What is WWF?</h2>
                <p>WWF was formed on 29 April 1961, by a group of eminent people who made an
                    inspired commitment to the natural world. 
                    They called for urgent worldwide action to stop vast numbers of wild animals from being hunted out of existence, 
                    and stop their habitats from being destroyed. 
                    <br />
                    <br />
                    But we cannot just rely on Governments or NGOs alone to solve the problem. Everyone needs to be involved in the fight to save and heal the planet and together, solutions are possible.
                </p>

            </div>    
            

            <h2>What is this about?</h2>
            <div className="infoDump">
                <h3>What is the Living Planet Report?</h3>
                <p>The Living Planet Report is a publication by WWF which is produced and published every two years with input from leading experts and other organisations all over the world. 
                    <br />
                    The data collected is subsequently analysed to discover what the latest trends in terms of the environments and the biodiversities within are. 
                    <br />
                    Then, the conclusions and recommendations brought up are edited together and beautified to form the report.
                </p>
            </div>
            
            <h3>What is the Living Planet Index?</h3>
            <SlButtonGroup>
                <SlButton size="medium">Previous page</SlButton>
                <SlButton size="medium">Next page</SlButton>
            </SlButtonGroup>
        </div>
        
    );
}
 
export default aboutUs;