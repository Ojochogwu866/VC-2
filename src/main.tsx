import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Stories from './scenes/Stories'
import Story from './scenes/Story'
import './index.css'
import {createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/story/:slug",
    element: <Stories/>,
  },
  {
    path: "/stories",
    element: <Story/>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
