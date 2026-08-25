import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    return(
        <div className="flex w-full items-center bg-blue-950 pt-4 fixed top-0 left-0 z-50">
            <div className="flex justify-center p-4 absolute left-6">
                <a href="/">
                    <img src={logo} alt="Logo" className="h-18 w-auto -mt-2"></img>
                </a>
            </div>
            <nav className="mx-auto bg-blue-950 p-4 text-center text-lg font-sans text-white -mt-2 h-16">
                <Link to="/" className="p-2 transition-colors duration-100 hover:text-yellow-400">home</Link>
                <Link to="/programs" className="p-2 transition-colors duration-100 hover:text-amber-400">programs</Link>
                <Link to="/about" className="p-2 transition-colors duration-100 hover:text-amber-400">about</Link>
                <Link to="https://hcb.hackclub.com/donations/start/rural-coders-society" target="_blank" className="p-2 text-blue-300 font-semibold border-2 border-blue-300 rounded-lg m-1 transition-colors duration-100 hover:text-blue-400 hover:border-blue-400">donate</Link>
                <Link to="/join" className="p-2 text-amber-400 font-semibold border-2 border-amber-400 rounded-lg m-1 transition-colors duration-100 hover:text-yellow-600 hover:border-yellow-600">join us</Link>
            </nav>
        </div>
        
    );
}

export default Navbar;