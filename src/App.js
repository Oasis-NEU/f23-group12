
import './App.css';
import Home from './Home';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <a href="/createEvent">create</a>,//<Home />,
  },
  {
    path: "/createEvent",
    element: <p>Create Event</p>
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
