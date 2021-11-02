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

            <h2>What is WWF?</h2>

            <h3>About WWF:</h3>

            <h2>What is this about?</h2>
            <h3>What is the Living Planet Report?</h3>
            <h3>What is the Living Planet Index?</h3>
            <SlButtonGroup>
                <SlButton size="medium">Previous page</SlButton>
                <SlButton size="medium">Next page</SlButton>
            </SlButtonGroup>
        </div>
        
    );
}
 
export default aboutUs;