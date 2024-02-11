import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Events from './scenes/events'
import Event from './scenes/event'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/events",
    element: <Events/>,
  },

  {
    path: "/event/:eventId",
    element: <Event/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
