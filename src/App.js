
import './App.css';
import Home from './EventPage';
// import mainPage from './mainPage';

import * as React from "react";
// import { Link } from 'react-router-dom';
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/mainPage",
    element: <center><a href="/createEvent">create</a></center>
   //  element: <center><a href="/events">Current Events!</a></center>
  }, 
  {
    path: "/createEvent",
    element: <Home />
  }
/*   {
    path: "/events",
    element: <mainPage />
  },

  {
    path: "/createEvent",
    element: <center><a href="/">Create Event!</a></center>,
  }, 
  {
    path: "/",
    element: <App /> 
  }*/
]);

function App() {

  return <RouterProvider router={router} />

  
}

export default App;
