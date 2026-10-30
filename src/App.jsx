import React from "react"
import { BrowserRouter, Route, Routes} from "react-router"

import './App.css'
import Home from './pages/Home'
import Contactus from './pages/Contactus.jsx'
import Tariffs from './pages/Tariffs.jsx'
import Header from "./companents/Header.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Xizmatlar' element={<Tariffs />} />
          <Route path='/Shifokorlar' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
