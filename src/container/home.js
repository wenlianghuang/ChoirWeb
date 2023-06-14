import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Choirweb from '../components/Choirweb';
import Preload from '../components/Preload';
import HomePage from '../components/homepage';
function Home(){
    return (
      <>
          <div className="App">
            
            <div>
            <Routes>
              <Route exact path="/" element={<HomePage />}/>
              <Route path="/ChoirWeb" element={<Choirweb/>}/>
              <Route path="/Preload" element={<Preload/>}/>
            </Routes>  
            </div>
          </div>
    </>
    );
}
export default Home

