import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import './index.css'

// Lazy-loaded so each page's code (and the Swiper library used by Members)
// only downloads when that page is actually visited, instead of all at once.
const Members = lazy(() => import('./Members.jsx'))
const Empire = lazy(() => import('./Empire.jsx'))
const Conquests = lazy(() => import('./Conquests.jsx'))
const Battles = lazy(() => import('./Battles.jsx'))
const Genetics = lazy(() => import('./Genetics.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<App />} />
          <Route path='members' element={<Members />} />
          <Route path='empire' element={<Empire />}/>
          <Route path='conquests' element={<Conquests />} />
          <Route path='battles' element={<Battles />} />
          <Route path='genetics' element={<Genetics />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
