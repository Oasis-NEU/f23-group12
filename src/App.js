
import './App.css';
import Home from './Home';

import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <center><a href="/createEvent">create</a></center>,//<Home />,
  }, 
  {
    path: "/createEvent",
    element: <Home />
  }
]);

function App() {

  return <RouterProvider router={router} />
}

export default App;
