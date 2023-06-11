import React, { Component }  from 'react';
import HomePage from '../components/homepage';
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
function Home(){
    return (
      <>
          <div className="App">
            
            <div>
            <Routes>
              <Route exact path="/" element={<HomePage />}/>
            </Routes>  
            </div>
          </div>
    </>
    );
}
export default Home

