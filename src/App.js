import './App.css';
import Navbar from './../src/components/totp-navbar';
import Home from './../src/views/pages/homepage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
