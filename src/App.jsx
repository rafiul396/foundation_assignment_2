import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from './pages/Movies';
import About from './pages/About';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
