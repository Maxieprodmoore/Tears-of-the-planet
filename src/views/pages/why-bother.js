import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';

const whyBother = () => {
    return (  
        <div>
            <h2>Why does it matter?</h2>
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