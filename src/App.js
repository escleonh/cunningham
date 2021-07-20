import './App.css';
import Navbar from './Nav-bar';
import Topbar from './Top-bar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

function App() {

  
  return (
    <Router>
    <div className="App">
    <Topbar />
    <Navbar />
      <div className='content'>
        <Switch>
          <Route path='/About'>
              <About />
          </Route>
          <Route path="/Contact">
              <Contact />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
        </Switch>
      </div>
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
