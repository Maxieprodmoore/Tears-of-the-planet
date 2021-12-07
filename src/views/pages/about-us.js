import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';

const AboutUs = () => {
    /* ------------------------- Link to other pages---------------------------------*/
    const toNextSection = (e) => {
        e.preventDefault();
        window.location.href='/nature-in-decline';
    };
    
    return (  
        <div>
            <div className="infoDump">
                <h2>What is WWF?</h2>
                <p>WWF is a Non-government organization that was formed on 29 April 1961 by a group of eminent people who made an
                    inspired commitment to the natural world. 
                    <br />
                    They're calling for urgent worldwide action to stop vast numbers of wild animals from being hunted out of existence, 
                    and stop their habitats from being destroyed. 
                    <br />
                    <br />
                    Check out the video down below for an example of what WWF does!
                </p>
                <iframe 
                    width="800" height="450" src="https://www.youtube-nocookie.com/embed/xuM3tIHZsQ8" title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                ></iframe>
            </div>    
            
            <div className="infoDump">
                <h2>What is this about?</h2>
                <h3>What is the Living Planet Report?</h3>
                <p>The Living Planet Report is a publication by WWF which is produced and published every two years with input from leading experts and other organisations all over the world. 
                    <br />
                    The data collected is subsequently analysed to discover what the latest trends in terms of the environments and the biodiversities within are. 
                    <br />
                    Then, the conclusions and recommendations brought up are compiled and beautified to form the report.
                </p>
                <h3>What is the Living Planet Index?</h3>
                <p>
                    Experts over the world have been monitoring the changes in the population sizes of thousands of animal species over the years. 
                    <br />
                    The data gathered is then collated, stored inside a database and analysed to form a measurement of the world's biodiversity, with the Living Planet Index being one of the biggest.
                </p>
                <div className="sectionBtns">
                    <SlButtonGroup>
                        <SlButton size="medium" href="/">Previous section</SlButton>
                        <SlButton size="medium" onClick={toNextSection}>Next section</SlButton>
                    </SlButtonGroup>
                </div> 
                
            </div>         
                       
        </div>
        
    );
}
 
export default AboutUs;