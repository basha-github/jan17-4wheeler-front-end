import React from 'react'
import Login from './rahul-components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './rahul-components/Home'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>} />
  <Route path="/home" element={<Home />} />
  
</Routes>

</BrowserRouter>

    </div>
  )
}
