import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import "./style.css"
import useLocalStorageState from 'use-local-storage-state'



function Home({ events }) {
  const [filter, setFilter] = useLocalStorageState('filter', "")

  const formatFilterTitle = (filter) => {
    if (filter === "") {
      return "None"
    } else if (filter === "Food-And-Drink") {
      return "Food & Drink"
    } else {
      return filter
    }
  }

  return (
    <label>
      <header>
        <center class="head-home">
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
        <center>
          Filter: {formatFilterTitle(filter)}
          <br />
          <button className='space-around' onClick={() => setFilter("")}>No Filter</button>
          <button className='space-around' onClick={() => setFilter("Frat")}>Frats</button>
          <button className='space-around' onClick={() => setFilter("Food-And-Drink")}>Food & Drink</button>
          <button className='space-around' onClick={() => setFilter("Concert")}>Concerts</button>
          <button className='space-around' onClick={() => setFilter("Club")}>Clubs</button>
          <button className='space-around' onClick={() => setFilter("Other")}>Other</button>

        </center>
        {events.filter((event) => {
          if (filter === "") {
            return true
          } else {
            return event.eventType === filter
          }
        }).map((event) => <p>{event.name} - {event.location} - {event.textArea}</p>)}
      </div>

    </label>

  );
}


export default Home;
