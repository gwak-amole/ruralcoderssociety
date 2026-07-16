import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="h-90 bg-blue-400 p-15 text-left">
            <h1 className="font-sans text-4xl text-amber-300 font-bold">Moving mountains</h1>
            <div className="flex flex-col mt-8">
                <p className="text-amber-300 font-semibold">Quick links:</p>
                <Link to="/join" className="text-blue-900 hover:text-white transition-colors duration-300 ease-in-out w-15">Join Us</Link>
                <Link to="/programs" className="text-blue-900 hover:text-white transition-colors duration-300 ease-in-out w-20">Programs</Link>
            </div>
            <p className="text-blue-900 text-sm text-center mt-30">&copy;Rural Coders Society 2026</p>
        </div>
    );
}