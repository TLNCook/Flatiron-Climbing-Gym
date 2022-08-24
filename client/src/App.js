import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Links from "./Links";
import SignUp from "./SignUp";
import Gallery from "./Gallery";
import ReviewCollection from "./ReviewCollection";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [ climbers, setClimbers ] = useState([])
  const [ loggedInClimberId, setLoggedInClimberId ] = useState(null)
  // const [ gyms, setGyms ] = useState([])
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  useEffect(() => {
    setLoggedInClimberId(sessionStorage.getItem("loggedInClimberId"))
    // fetch("/climbers")
    // .then((r) => r.json())
    // .then((climbers) => setClimbers(climbers));
}, []);

  return (
    <div className="App">
      {isLoggedIn ? <Navbar loggedInClimberId={loggedInClimberId} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null }
      <Routes>
        <Route path="/login" element={ <Login setLoggedInClimberId={setLoggedInClimberId} setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/browse-reviews' element={ <ReviewCollection setIsLoggedIn={setIsLoggedIn} page={'items'} loggedInClimberId={loggedInClimberId} /> } />
        <Route path='/climbers/:id' element={ <Home setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/signup' element={ <SignUp setIsLoggedIn={setIsLoggedIn} setLoggedInClimberId={setLoggedInClimberId} /> } />
        <Route path='/links' element={ <Links setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/gallery' element={ <Gallery setIsLoggedIn={setIsLoggedIn}/> } />
      </Routes>
    </div>
  );
}

export default App;
