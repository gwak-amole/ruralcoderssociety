import Navbar from '../components/Navbar';
import RCSteam from '../assets/photo2.jpg'
import Footer from '../components/Footer'
function About() {
    return(
        <div>
            <div className="md:max-h-144 w-full text-center mb-20">
                <div className="h-128 bg-blue-900  pt-22 bg-linear-to-b from-transparent to-blue-950">
                    <h1 className="font-title text-4xl md:text-5xl text-center px-4 sm:px-8 md:px-15 pt-15 font-semibold text-white pb-8">About <span className="text-amber-400 hover:text-amber-300 duration-300 ease-in-out">Rural Coders Society</span></h1>
                    <img className="w-full max-w-100 h-auto mx-auto rounded-xl"src={RCSteam}></img>
                </div>
            </div>
            <div className="block text-center sm:mt-15 px-2">
                <div className="text-blue-950 w-full max-w-150 mx-auto my-10">
                    <p className="font-desc text-md sm:text-lg md:text-xl">Rural Coders Society started when founder Sophie Gwak came back from a Hack Club event called Shiba Arcade, where teens from all over the world competed for the opportunity to build an arcade in Japan and showcase their own arcade games. Inspired by such a collaborative and supportive maker culture, Gwak wanted to bring this culture back to her rural high school in the US. However, unable to find a teacher sponsor for her club, she resolved to establish RCS as a fiscally sponsored nonprofit project under The Hack Foundation 501(c)(3) (EIN: 81-2908499). </p>
                    <br></br>
                    <p className="font-desc text-md sm:text-lg md:text-xl">Gwak, having moved to El Paso later on, resolved to extend RCS tech opportunities to both rural and underserved communities. She looks forward to keep expanding the organization's impact and changing life trajectories for the better of individuals and the communities they care about.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About