import Home from './Home';
import Header from './Header';
import Checkout from './Checkout'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    //BEM
  <Router>
  <div className="app">
  <Header />
      <Switch>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/' >
           <Home />
        </Route>
      </Switch>
        
        
  </div>
   
  </Router> 
  );
}

export default App;
