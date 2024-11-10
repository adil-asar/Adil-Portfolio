import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import About from './components/about/About'


function App() {
  

  return (
 <section>
 <Navbar/>
 <Home/>
 <About />
 <Resume  />
 <Portfolio/>
 <Contact />
 </section>
  )
}

export default App
