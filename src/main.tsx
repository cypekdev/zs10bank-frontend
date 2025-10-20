import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  </StrictMode>,
)
