import React  from 'react'
import AuthProvider from './contexts/auth'
import './App.css';

import Home from './pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './pages/contacts';
import About from './pages/about';
import Portifolio from './pages/portifolio';


function App() {
 
  return (
   
    <>
     <AuthProvider>
      <Router>
     
        
        <Switch>
          <div className="pages">
          <Route path='/' exact component={Home} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
          <Route path='/portifolio' component={Portifolio} />
          </div>
          
        </Switch>
      </Router>
      </AuthProvider>
    
    </>
  );
}

export default App;
