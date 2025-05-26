import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/contact" element={<h1 className="text-3xl font-bold underline">Contact</h1>} />
        <Route path="/map" element={<h1 className="text-3xl font-bold underline">Contact</h1>} />
        <Route path="/radio" element={<h1 className="text-3xl font-bold underline">Contact</h1>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
