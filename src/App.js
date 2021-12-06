import '@shoelace-style/react/dist/button';
import '@shoelace-style/react/dist/button-group';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './../src/components/totp-navbar';
import Home from './../src/views/pages/homepage';
import AboutUs from './../src/views/pages/about-us';
import NatureInDecline from './../src/views/pages/nature-in-decline';
import WhyBother from './../src/views/pages/why-bother';
import HowICanHelp from './../src/views/pages/how-I-can-Help';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.61/dist/');

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
