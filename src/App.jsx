import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

const About = () => <div style={{padding: '2rem'}}><h2>About Page</h2></div>
const Contact = () => <div style={{padding: '2rem'}}><h2>Contact Page</h2></div>

export default function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<About />} />
                <Route path="/" element={<Contact />} />
            </Routes>
        </>
    )
}