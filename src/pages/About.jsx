import Navbar from '../components/Navbar';
import RCSteam from '../assets/photo2.jpg'
import Footer from '../components/Footer'
function About() {
    return(
        <div>
            <div className="h-144 w-full pt-22 bg-blue-950 text-center">
                <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">About <span className="text-amber-400 hover:text-amber-300 duration-300 ease-in-out">Rural Coders Society</span></h1>
            </div>
            <div className="block m-12 text-center">
                <img className="w-100 mx-auto -mt-75 rounded-xl"src={RCSteam}></img>
                <div className="text-xl text-blue-950 w-150 mx-auto mt-10">
                    <p>Rural Coders Society started when founder Sophie Gwak came back from a Hack Club event called Shiba Arcade, where teens from all over the world competed for the opportunity to build an arcade in Japan and showcase their own arcade games. Inspired by such a collaborative and supportive maker culture, Gwak wanted to bring this culture back to her rural high school in the US. However, unable to find a teacher sponsor for her club, she resolved to establish RCS as a fiscally sponsored nonprofit project under The Hack Foundation 501(c)(3) (EIN: 81-2908499). </p>
                    <br></br>
                    <p>Gwak, having moved to El Paso later on, resolved to extend RCS tech opportunities to both rural and underserved communities. She looks forward to keep expanding the organization's impact and changing life trajectories for the better of individuals and the communities they care about.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About