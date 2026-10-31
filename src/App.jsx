
import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero';
import TrustedBy from './component/TrustedBy';
import Services from './component/Services';
import OurWork from './component/OurWork';
import Teams from './component/Teams';
import Contact from './component/Contact/Contact';
import { Toaster } from 'react-hot-toast';


function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className='dark:bg:black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <Contact />
    </div>
  )
}

export default App