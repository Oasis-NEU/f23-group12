
import './App.css';
import Home from './Home';

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
  </Routes>
  }
</div>
</Router>
 )
}

export default App;
