import SlButtonGroup from '@shoelace-style/react/dist/components/button-group';
import SlButton from '@shoelace-style/react/dist/components/button';

const whyBother = () => {
    return (  
        <div className="content">
            <h2>Why does it matter?</h2>
            <SlButtonGroup>
                <SlButton size="medium">Previous page</SlButton>
                <SlButton size="medium">Back to home page</SlButton>
                <SlButton size="medium">Next page</SlButton>
            </SlButtonGroup>
        </div>
        
    );
}
 
export default whyBother;