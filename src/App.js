import React from 'react';
import dogs_day_out from './components/img/dogs_day_out.png'
import './App.css';
import Home from './components/Home';
import DogDetail from './components/DogDetail';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import DogsList from './components/DogsList';
import Dogs from './components/Dogs'


function App() {
 
  
  const [dogList, setDogList] = useState(null);
  const [activeDog, setActiveDog] = useState(null);
 
  useEffect(() => {DogsList(setDogList)}, [])
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img className='Header-img' src={dogs_day_out} alt="Dog Logo" />
          <div className='Nav-links'>
            <ul>
              <li>
                <Link to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/register"}>
                  The gang
                </Link>
              </li>
            </ul>
          </div>
        </header>
        
          <Routes>
            <Route exact path='/' element={
                  <Home />
            } />
            <Route path='/register' element={
              <Dogs dogList={dogList} showInfo={setActiveDog} />
            } />
            <Route path='/info' element={
              <DogDetail activeDog={activeDog} />
            } />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
