import { Route, Routes } from 'react-router-dom';

import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
   
      <section>
        <Navbar />
       <Home />
       <Resume />
       <Portfolio />
       <Contact />
        <Footer />
      </section>
  
  );
}

export default App;
