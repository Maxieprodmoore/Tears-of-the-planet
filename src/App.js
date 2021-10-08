import '@shoelace-style/shoelace/dist/components/button/button.js';
import Navbar from './../src/components/totp-navbar';
import Home from './../src/views/pages/homepage';
import AboutUs from './../src/views/pages/about-us';
import NatureInDecline from './../src/views/pages/nature-in-decline';
import WhyBother from './../src/views/pages/why-bother';
import HowICanHelp from './../src/views/pages/how-I-can-Help';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
        <AboutUs />
        <NatureInDecline />
        <WhyBother />
        <HowICanHelp />
      </div>
    </div>
  );
}

export default App;
