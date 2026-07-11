import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Programs from './pages/Programs'
import About from './pages/About'
import Join from './pages/Join'
import Donate from './pages/Donate'

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/about" element={<About />} />
                <Route path="/join" element={<Join />} />
                <Route path="/donate" element={<Donate />} />
            </Routes>
        </>
    )
}