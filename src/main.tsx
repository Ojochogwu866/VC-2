import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Events from './scenes/events'
import Event from './scenes/event'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import Community from './scenes/community'
import Mentorship from './scenes/mentorship'
import Register from './scenes/event-register'
import MentorRegister from './scenes/mentorship/Mentorship-Application'

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
      path:"event/register-event/:eventId",
      element:<Register/>
  },
  {
    path: "/event/:eventId",
    element: <Event/>
  },
  {
    path: "/community",
    element: <Community/>
  },
  {
    path: "/mentorship",
    element: <Mentorship/>
  },
  {
    path:"/mentors-registration",
    element: <MentorRegister/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
