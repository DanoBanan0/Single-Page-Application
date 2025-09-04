import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Home from './assets/pages/Home'
import Library from './assets/pages/Library'
import Signup from './assets/pages/Signup'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      <Navbar />
      <main className="container py-4 flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      <footer className="text-center py-3 text-muted" style={{background:'#0b0b0b'}}>
        Kodigo Music © 2025
      </footer>
    </div>
  )
}
