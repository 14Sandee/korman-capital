import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Philosophy } from './pages/Philosophy'
import { QuarterlyNewsletter } from './pages/QuarterlyNewsletter'
import { Blogs } from './pages/Blogs'
import { Disclosure } from './pages/Disclosure'
import { ScrollToTop } from './utils/ScrollToTop'
import { Contact } from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='philosophy' element={<Philosophy />} />
          <Route path='quarterly-newsletter' element={<QuarterlyNewsletter />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='disclosure' element={<Disclosure />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
