import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return(
        <header className="fixed w-full items-center bg-blue-950 top-0 left-0 z-50">
            <div className="flex h-20 justify-between items-center px-4 sm:px-6">
                <a href="/">
                    <img src={logo} alt="Logo" className="h-18 w-auto"></img>
                </a>

                <nav className="hidden md:flex items-center gap-2 text-lg text-white">
                    <Link to="/" className="p-2 transition-colors duration-100 hover:text-yellow-400">home</Link>
                    <Link to="/programs" className="p-2 transition-colors duration-100 hover:text-amber-400">programs</Link>
                    <Link to="/about" className="p-2 transition-colors duration-100 hover:text-amber-400">about</Link>
                    <Link to="https://hcb.hackclub.com/donations/start/rural-coders-society" target="_blank" className="p-2 text-blue-300 font-semibold border-2 border-blue-300 rounded-lg m-1 transition-colors duration-100 hover:text-blue-400 hover:border-blue-400">donate</Link>
                    <Link to="https://ruralcoderssociety.fillout.com/t/fHUR7XnmwBus" target="_blank" className="p-2 text-amber-400 font-semibold border-2 border-amber-400 rounded-lg m-1 transition-colors duration-100 hover:text-yellow-600 hover:border-yellow-600">join us</Link>
                </nav>

                <button className="md:hidden text-3xl text-white p-2" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "×" : "☰"}</button>

            </div>

        </header>
        
    );
}

export default Navbar;