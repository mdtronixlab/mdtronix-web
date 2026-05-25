import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LandingPage from './pages/LandingPage'
import NexusHubPage from './pages/ProductPage'
import ExpertisePage from './pages/ExpertisePage'
import CalculatorPage from './pages/CalculatorPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<NexusHubPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
