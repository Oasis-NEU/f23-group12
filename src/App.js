import './App.css';
import Home from './Home';
import fratsoma from "./FratsomaLogo.png"
import { useState } from "react";


import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import AboutPage from './Aboutpage';
import useLocalStorageState from 'use-local-storage-state';




function App() {
  // list of events (Set state array)
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    eventType: "",
    textArea: "",
  });

  const [events, setEvents] = useLocalStorageState("events", {
    defaultValue: [
      {
        name: "MIT Theta Tao",
        location: "123 Street",
        eventType: "Frat",
        textArea: "Come to our frat! It is neon themed",
      },
      {
        name: "A Boogie Concert",
        location: "Matthew's Arena",
        eventType: "Concert",
        textArea: "CUP is hosting the homecoming concert!!",
      },
      {
        name: "Snowport",
        location: "Seaport Commons",
        eventType: "Food-And-Drink",
        textArea: "Seaport is having a winter festival! Come for shopping and Food and Drink. Available through 12/31",
      },
      {
        name: "ICON",
        location: "100 Warrenton St, Boston, MA",
        eventType: "Club",
        textArea: "ICON Club!! Come with friends",
      },
      {
        name: "Lantern Festival",
        location: "Charleston River",
        eventType: "Other",
        textArea: "See the beautiful laterns",
      }
    ]
  })

  // const [events, setEvents] = useState([
  //   {
  //     name: "MIT Theta Tao",
  //     location: "123 Street",
  //     eventType: "Frat",
  //     textArea: "Come to our frat! It is neon themed",
  //   }, 
  //   {
  //     name: "A Boogie Concert",
  //     location: "Matthew's Arena",
  //     eventType: "Concert",
  //     textArea: "CUP is hosting the homecoming concert!!",
  //   },
  //   {
  //     name: "Snowport",
  //     location: "Seaport Commons",
  //     eventType: "Food-And-Drink",
  //     textArea: "Seaport is having a winter festival! Come for shopping and Food and Drink. Available through 12/31",
  //   },
  //   {
  //     name: "ICON",
  //     location: "100 Warrenton St, Boston, MA",
  //     eventType: "Club",
  //     textArea: "ICON Club!! Come with friends",
  //   },
  //   {
  //     name: "Lantern Festival",
  //     location: "Charleston River",
  //     eventType: "Other",
  //     textArea: "See the beautiful laterns",
  //   }
  // ]);


  return (
    <Router>
      <header>
        <div id="logo">
          <a href="/">
            <img src={fratsoma} alt="fratsoma"
              width="200"
              height="200" /> </a>
        </div>
      </header>

      <div>
        <nav>
          <ul class="button">
            <li class="home-button">
              <Link to="/">Home</Link>
            </li>
            <li class="event-button">
              <Link to="/upload-your-own-event">Upload Your Own Event</Link>
            </li>
          </ul>
        </nav>


        {
          <Routes>
            <Route path="/upload-your-own-event" element={<AboutPage
              formData={formData} setFormData={setFormData} setEvents={setEvents}
              events={events} />}>
            </Route>
            <Route path="/" element={<Home events={events} />}>
            </Route>
          </Routes>
        }
      </div>
    </Router>
  )
}


export default App;
