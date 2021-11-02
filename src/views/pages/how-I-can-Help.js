import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';
import  '@shoelace-style/react/dist/icon';

const howICanHelp = () => {
    return (
        <div className="content">
          <h2>What can we do to save our planet?</h2>
          <h3>Scientists are suggesting the following actions:</h3>
          <h3>Helping our freshwater sources from our homes:</h3>
          <h3>Share this with a friend/family member!</h3>
            <p></p>
            <div id="socials">
              <SlButton></SlButton>
              <SlButton></SlButton>
              <SlButton></SlButton>
              <SlButton></SlButton>
              <SlButton></SlButton>
            </div>
            <p></p>
            <SlButton size="large">Living Planet Report</SlButton>
            <SlButton size="large">Living Planet Report Youth Edition</SlButton>
          <h3>Make a pledge to do more for the Planet!</h3>
          <SlButton size="large" type="success">Make a Pledge!</SlButton>
          <div id="pledges">
            <h3>Pledges</h3>
          </div>
          <SlButtonGroup>
            <SlButton size="medium">Previous page</SlButton>
            <SlButton size="medium">Back to home page</SlButton>
            <SlButton size="medium">Next page</SlButton>
          </SlButtonGroup>
        </div>
      );
}
 
export default howICanHelp;