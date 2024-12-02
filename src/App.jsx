import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero onOrderClick={() => setIsOrderModalOpen(true)} />
      <About />
      <Products />
      <Contact />
      <CTA isModalOpen={isOrderModalOpen} setIsModalOpen={setIsOrderModalOpen} />
      <Footer />
      <FloatingButton onOrderClick={() => setIsOrderModalOpen(true)} />
    </>
  )
}

export default App
