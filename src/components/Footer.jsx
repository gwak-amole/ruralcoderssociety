import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="h-90 bg-blue-950 px-15 pt-15 text-left flex flex-col">
            <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-amber-300 font-bold">Moving mountains.</h1>
            <div className="flex flex-col mt-8">
                <p className="text-white text-md sm:text-lg font-semibold">Quick links:</p>
                <Link to="/join" className="text-md sm:text-lg text-blue-400 hover:text-white transition-colors duration-300 ease-in-out w-full max-w-15">Join Us</Link>
                <Link to="/programs" className="text-md sm:text-lg text-blue-400 hover:text-white transition-colors duration-300 ease-in-out w-full max-w-20">Programs</Link>
            </div>
            <div className="flex flex-col mt-2">
                <p className="text-md sm:text-lg text-white font-semibold">Contact:</p>
                <p className="text-md sm:text-lg text-blue-400 hover:text-white transition-colors duration-300 ease-in-out w-full max-w-50">@ruralcoders instagram</p>
                <p className="text-md sm:text-lg text-blue-400 hover:text-white transition-colors duration-300 ease-in-out w-full max-w-20">info@ruralcoderssociety.org</p>
            </div>
            <p className="text-white text-sm text-center mt-auto pb-2">&copy;Rural Coders Society 2026</p>
        </div>
    );
}