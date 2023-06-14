import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './container/home';
//import './css/responsive.css';
//import './css/templatemo-style.css';
function App() { 
  return (
    
  <Router>
    <Home/>
  </Router>


  );
}
export default App
//export default withAuthenticator(App);