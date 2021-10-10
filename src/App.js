import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './../src/components/totp-navbar';
import Home from './../src/views/pages/homepage';
import AboutUs from './../src/views/pages/about-us';
import NatureInDecline from './../src/views/pages/nature-in-decline';
import WhyBother from './../src/views/pages/why-bother';
import HowICanHelp from './../src/views/pages/how-I-can-Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about-us">
              <AboutUs />
            </Route>
            <Route path="/nature-in-decline">
              <NatureInDecline />
            </Route>
            <Route path="/why-bother">
              <WhyBother />
            </Route>
            <Route path="/how-i-can-help">
              <HowICanHelp />
            </Route>
          </Switch>              
                
        </div>
      </div>
    </Router>
      
  );
}

export default App;
