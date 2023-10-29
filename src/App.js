
import './App.css';
import Home from './Home';
import Clubs from './Clubs';
import Frats from './Frats';
import FoodDrink from './FoodDrink';
import Concerts from './Concerts';
import Other from './Other';

import * as React from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import AboutPage from './Aboutpage';

function App() {
 return (
  <Router>
  <div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/upload-your-own-event">Upload Your Own Event</Link>
      </li>
    </ul>
  </nav>

  {
    <Routes>
    <Route path="/upload-your-own-event" element={<AboutPage/>}>
    </Route>
    <Route path="/users" element={<AboutPage/>}>
    </Route>
    <Route path="/" element={<Home/>}>
    </Route>
    <Route path="/clubs" element={<Clubs/>}>
    </Route>
    <Route path="/frats" element={<Frats/>}>
    </Route>
    <Route path="/concerts" element={<Concerts/>}>
    </Route>
    <Route path="/food-drinks" element={<FoodDrink/>}>
    </Route>
    <Route path="/other" element={<Other/>}>
    </Route>
  </Routes>
  }
</div>
</Router>
 )
}

export default App;
