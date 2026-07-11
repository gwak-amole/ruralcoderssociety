import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <Link to="/" style={{}}>Home</Link>
            <Link to="/about" style={{}}>About</Link>
            <Link to="/contact" style={{}}>Contact</Link>
        </nav>
    );
}

export default Navbar;