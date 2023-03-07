import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Educations from './pages/Educations'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hakkimizda" element={<AboutUs />} />
                <Route path="/egitimlerimiz" element={<Educations />} />
                <Route path="/iletisim" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App