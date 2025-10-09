import { useState } from 'react'
import React from 'react'
import { createBrowserRouter } from 'react-router'
import Login from './components/Login'
import Browser from './components/Browser'
import { RouterProvider } from 'react-router/dom'

const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Login />
  },
  {
    path:"/browser",
    element: <Browser />
  }
])
function App() {
  return (
    <RouterProvider router={approuter} />
  )
}

export default App
