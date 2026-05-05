import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Members from './Members.jsx'
import './index.css'
import App from './App.jsx'
import Empire from './Empire.jsx'
import Conquests from './Conquests.jsx'
import Battles from './Battles.jsx'
import Genetics from './Genetics.jsx'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<App />} />
        <Route path='members' element={<Members />} />
        <Route path='empire' element={<Empire />}/>
        <Route path='conquests' element={<Conquests />} />
        <Route path='battles' element={<Battles />} />
        <Route path='genetics' element={<Genetics />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
