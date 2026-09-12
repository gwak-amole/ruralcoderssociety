import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RCSteam from '../assets/photo3.jpg'
import HeaderDiv2 from '../components/HeaderDiv2'
import CardGrid from '../components/CardGrid'

// program images
// file imports for how we do it
import mentor from "../assets/photo3.jpg"
import group from "../assets/how_we_do_it_images/group.jpg"
import food from "../assets/how_we_do_it_images/foodinjpeg.jpg"

function Programs() {
    const cards =[
        {header: "Build Sprints", desc: "Our beginner-friendly Build Sprints are a 2-week period in which members are given a theme to build a project on, in groups or individually. At the end of the two weeks, we have a showcase where all projects are shared and enjoyed!", image_link: group, height: 160, key: 1},
        {header: "Hackathon Trips", desc: "We offer opportunities to go to hackathons around the US with financial aid. It's a great way for members to meet other passionate builders, push the boundaries of what they can make, and get guidance from seasoned mentors in the tech field.", image_link: food, height: 160, key: 2},
        {header: "Mentor Network", desc: "We have a mentor network of experienced coders, both teens and adults, to provide guidance for projects and help troubleshoot code.", image_link: mentor, height: 160, key: 3}
    ]
    return(
        <div>
            <div>
                <div className="h-96 w-full pt-22 bg-blue-950 text-center">
                    <h1 className="font-title text-7xl text-center p-32 pt-20 font-semibold text-white pb-8">Our <span className="text-amber-400 hover:text-amber-300 duration-300 ease-in-out">Programs</span></h1>
                </div>
                <div className="block m-12 text-center">
                    <div className="text-xl text-blue-950 w-150 mx-auto mt-10">
                        <h1 className="text-4xl mb-3 font-bold">How We Help</h1>
                        <p>We provide spaces and communities for collaborative, project-making opportunities. This spans from our Build Sprints—2-week long themed project-building periods—to our hackathon trips. Our mentor network helps members with project guidance and getting unstuck!</p>
                    </div>
                </div>
                <HeaderDiv2 header={null} content={<CardGrid cols={3} cards={cards} card_type={2}/>}/>
                <Footer />
            </div>
        </div>
    );
}

export default Programs