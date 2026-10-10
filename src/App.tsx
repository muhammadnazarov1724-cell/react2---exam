import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loyaut from './components/Loyaut'
import Home from './components/Home'
import About from './components/About'

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Loyaut/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}