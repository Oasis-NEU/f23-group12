import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"


function Home() {
  return (
    <label>
      <header>
        <center class = "head-home">
          Home
          </center>
      </header>
      <center>
        Welcome to Fratsoma, your gateway to the vibrant college community in 
        Boston! We are a team of four ambitious and innovative female students 
        from Northeastern University, driven by a shared passion for fostering 
        connections and creating unforgettable experiences for our fellow students.
        <br /><br />
        Our Mission: Fratsoma was born out of our desire to unite the diverse and 
        thriving college community in Boston. Our mission is simple: to help you 
        discover and engage in the best events, clubs, and frat parties in the
         Boston area. Whether you're a local or a newcomer, we're here to ensure
          you never miss out on the excitement that this incredible city has to 
          offer. From the latest campus happenings to the hottest fraternity 
          gatherings, Fratsoma has you covered
        <br /><br />
      </center>

      <div>
        {}
        <center>
        <Link to="/clubs">
          <button>Club</button>
          <br /><br />
        </Link>
        <Link to="/frats">
          <button>Frat</button>
          <br /><br />
        </Link>
        <Link to="/food-drinks">
          <button>Food & Drinks</button>
          <br /><br />
        </Link>
        <Link to="/concerts">
          <button>Concerts</button>
          <br /><br />
        </Link>
        <Link to="/other">
          <button>Other</button>
          <br /><br />
        </Link>
        </center>
      </div>
    </label>
   
  );
}


export default Home;
