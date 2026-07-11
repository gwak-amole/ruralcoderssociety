import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {
    return(
        <div className="flex w-full items-center bg-blue-950 pt-4">
            <div className="flex justify-center p-4 absolute left-6">
                <img src={logo} alt="Logo" className="h-18 w-auto"></img>
            </div>
            <nav className="mx-auto bg-blue-950 p-4 text-center text-lg font-sans text-white -mt-2">
            <Link to="/" className="p-2 transition-colors duration-100 hover:text-yellow-400">Home</Link>
            <Link to="/programs" className="p-2 transition-colors duration-100 hover:text-yellow-400">Programs</Link>
            <Link to="/about" className="p-2 transition-colors duration-100 hover:text-yellow-400">About</Link>
            <Link to="/join" className="p-2 transition-colors duration-100 hover:text-yellow-400">Join Us</Link>
            <Link to="/donate" className="p-2 text-yellow-300 font-semibold border-2 border-yellow-300 rounded-lg m-1 transition-colors duration-100 hover:text-yellow-500 hover:border-yellow-500">Donate</Link>
        </nav>
        </div>
        
    );
}

export default Navbar;