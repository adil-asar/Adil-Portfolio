import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Navbar from './components/navbar/navbar';

function App() {
  return (
   
      <section>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
  
  );
}

export default App;
