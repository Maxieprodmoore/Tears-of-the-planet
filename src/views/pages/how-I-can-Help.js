import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';
import  '@shoelace-style/react/dist/icon';

const howICanHelp = () => {
    return (
        <div>
          <div className="infoDump">
            <h2>What can we do to save our planet?</h2>
            <div className="info">
              <p>
                  We can start by rethinking our relationship with the planet 
                  and finding the balance that will allow us and the rest of nature to survive.
                </p>
              
                <p>
                  Stop doing it altogether, and give up a product or activity. 
                  But there needs to be an alternative to replace it with, which unfortunately could also cause problems.
                </p>
                <p>
                  Do it less, so that nature is able to replace what we take or absorb the impact of our action. 
                  <br />
                  This could mean that we need to learn to be satisfied with less, or find ways to make the most of less.
                  <br /> 
                  Whether it be by wasting less food, or by reusing things rather than replacing them.
                </p>
                <p>
                  Find new ways to do it so that we get the same benefit but in a way that does not cause damage to the planet. 
                  <br />
                  For instance, we can use renewable energy to power our electronic devices and heat our homes, rather than energy produced by burning fossil fuels.
                </p>
            </div>                          
          </div>
          <div className="infoDump">
            <h3>Scientists are suggesting the following actions:</h3>
            <div className="info">
              <p>
                Stop the wastage of food. 
                <br />
                Change some of our diets and change fishing practices to ensure that the oceans can thrive and replace what we take out.
              </p>
              <p>
                If you feel bolder, choose a more plant-based diet.
              </p>
              <p>
                Else, supporting food that is produced in a more environmentally sustainable manner,
                <br /> 
                and buying locally produced food (where possible) is a great start.
              </p>
              <p>
                Check your energy is from 100% renewable sources and encourage the replacement to renewable sources.
              </p>
              <p>
                Invest in ‘nature-based solutions’ that can support biodiversity while playing an active role in slowing climate change 
                and protecting people and wildlife from its effects. 
                <br />
                <p> For example, carefully choosing places to plant more forests to strengthen landscapes.
                    <br /> 
                    Improve soil quality and capture carbon to help in the fight against climate change. 
                </p>
              </p>
              <p>
                Plant or support the planting of trees.
                <br />
                It can help improve air quality, prevent floods and keep residential areas cool.
                <br /> 
                and simply having trees nearby improves the physical and mental health of people living and working there.

              </p>
              <p>
                Otherwise, just taking action for your local biodiversities go a long way in helping mother Earth.
              </p>
            </div>

          </div>
          <div className="infoDump">
            <h3>
              Don’t worry about taking action alone, there are peers out there who are just as eager to ensure Nature is healing:
            </h3>
          </div>
          
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

          <div className="sectionBtns">
            <SlButtonGroup>
              <SlButton size="medium" href="/why-bother">Previous section</SlButton>
              <SlButton size="medium" href="/">Back to home page</SlButton>
            </SlButtonGroup>
          </div>
          
        </div>
      );
}
 
export default howICanHelp;