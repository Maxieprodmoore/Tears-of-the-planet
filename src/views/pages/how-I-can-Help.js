import SlButtonGroup from '@shoelace-style/react/dist/button-group';
import SlButton from '@shoelace-style/react/dist/button';
import SlIcon from '@shoelace-style/react/dist/icon';
import buffetImg from './../../images/pexels-olga-lioncat-buffet.png';
import changingBlbImg from './../../images/pexels-anete-lusina-changingLightbulbs.png';
import plantingImg from './../../images/pexels-greta-hoffman-Planting.png';

const HowICanHelp = () => {
  const toPrevSection = (e) => {
    e.preventDefault();
    window.location.href='/why-bother';
  };

  const url = window.location;
  const tweetCurrentPage = (e) => {
    e.preventDefault();
    window.open("https://twitter.com/share?url="+ encodeURIComponent(url)); 
  };

    return (
        <div>
          <div className="infoDump">
            <h2>What can we do to save our planet?</h2>
            
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
          
          <div className="infoDump">
            <h3>Scientists are suggesting the following actions:</h3>
            <div className="info">
              <div className="infoBtns">
                <img src={buffetImg} alt="Person planting a seedling in the soil" />
              </div>
              <div className="infoHelpNature">
                <p>
                  Stop the wastage of food. 
                  <br />
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
              </div>
              
            </div>
             
            <div className="info">
              <div className="infoHelpNature">
                <p>
                  Check your energy is from 100% renewable sources and encourage friends and family to switch to renewable sources.
                </p>
              </div>
              <div className="infoBtns">
                <img src={changingBlbImg} alt="Person changing a lightbulb" />
              </div>
            </div>
            <div className="info">
              <div className="infoBtns">
                <img src={plantingImg} alt="Person planting a seedling in the soil" />
              </div>
              <div className="infoHelpNature">
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

          </div>
          <div className="infoDump">
            <h3>
              Don’t worry about taking action alone, there are peers out there who are just as eager to ensure Nature is healing:
            </h3>
            <div className="infoVids">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/wq9DJWFtnuY" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >      
              </iframe>
              
            </div>
            <div className="infoVids">
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/kEjcTjGajis" title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>
            </div>
                         
          </div>
          
          <div className="infoDump">
              <h3>Share this with a friend/family member!</h3>
                <p></p>
                <div className="socials">                  
                  <SlButton circle className="socialBtn" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftears-of-the-planet.netlify.app%2F&amp;src=sdkpreparse"><SlIcon name="facebook"></SlIcon></SlButton>
                  <SlButton circle className="socialBtn" target="_blank" onClick={tweetCurrentPage}><SlIcon name="twitter"></SlIcon></SlButton>   
                </div>
                <h4>Click here for more details!</h4>
                <div className="socials">
                  <SlButton size="large" className="socialBtn" href="https://files.worldwildlife.org/wwfcmsprod/files/Publication/file/279c656a32_ENGLISH_FULL.pdf" target="_blank"><SlIcon name="journal"/> Living Planet Report</SlButton>
                  <SlButton size="large" href="https://files.worldwildlife.org/wwfcmsprod/files/EducatorsToolkitFile/file/1y1dqia168_Living_Planet_Report_2020_Youth_Edition_Report.pdf" target="_blank"><SlIcon name="journal"/> Living Planet Report Youth Edition</SlButton>
                </div>
                
              <h3>Make a pledge to do more for the Planet!</h3>
              <SlButton size="large" type="success" className="socials">Make a Pledge!</SlButton>
              <div id="pledges">
                <h3>Pledges</h3>
              </div>

              <div className="sectionBtns">
                <SlButtonGroup>
                  <SlButton size="medium" onClick={toPrevSection} >Previous section</SlButton>
                  <SlButton size="medium" href="/">Back to home page</SlButton>
                </SlButtonGroup>
              </div>
          </div>
          
          
        </div>
      );
}
 
export default HowICanHelp;