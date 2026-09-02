// import components
import Carousel from "../components/Carousel";
import JoinButton from "../components/JoinButton"
import JoinDiscord from "../components/JoinDiscord"
import CardGrid from "../components/CardGrid";
import HeaderDiv from "../components/HeaderDiv";
import HeaderDiv2 from "../components/HeaderDiv2";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

// file imports for how we do it
import buildCollaboratively from "../assets/how_we_do_it_images/build_collaboratively.avif"
import group from "../assets/how_we_do_it_images/group.jpg"
import food from "../assets/how_we_do_it_images/foodinjpeg.jpg"

// file imports for project carousel
import project1 from "../assets/projects/project1.jpg"
import project2 from "../assets/projects/project2.jpg"
import project3 from "../assets/projects/project3.jpg"
import project4 from "../assets/projects/project4.jpg"
import project5 from "../assets/projects/project5.jpg"
import project6 from "../assets/projects/project6.jpg"
import project7 from "../assets/projects/project7.jpg"


function Home() {
  const cards = [
  {number: 1960, prefix: "$", suffix: "+", desc: "raised for RCS programs", key: 1},
  {number: 42, prefix: null, suffix: "+", desc: "projects created with RCS", key: 2},
  {number: 45, prefix: null, suffix: "+", desc: "people reached through RCS events", key: 3}
  ]
  const cards2 =[
    {header: "Build", desc: "Learn by shipping real projects through beginner-friendly Build Sprints, workshops, and bootcamps.", image_link: buildCollaboratively, key: 1},
    {header: "Explore", desc: "Access hackathons, showcases, and technical experiences that may not exist in your community.", image_link: group, key: 2},
    {header: "Connect", desc: "Build together with other teen coders, mentors, and communities locally and around the world.", image_link: food, key: 3}
  ]

  const projectphotoarray = [
    {file: project1, key: 1},
    {file: project2, key: 2},
    {file: project3, key: 3},
    {file: project4, key: 4},
    {file: project5, key: 5},
    {file: project6, key: 6},
    {file: project7, key: 7}
  ]

  return (
    <div className="h-144 w-full pt-22 bg-blue-950 text-center">
        <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">Coding for <span className="text-amber-400 hover:text-amber-300 duration-300 ease-in-out">Every Zip Code</span></h1>
        <h3 className="text-2xl text-center pb-8 font-semibold text-white"><span className="underline text-yellow-400 hover:text-yellow-300 duration-300 ease-in-out">Free</span> project-based coding opportunities and communities for students in <span className="text-yellow-400 underline hover:text-yellow-300 duration-300 ease-in-out">rural and underserved areas.</span></h3>
        <JoinButton />
        <Carousel />
        <hr className="border-blue-900"></hr>
        <HeaderDiv header="Our Impact" content={<CardGrid cols={3} cards={cards} card_type={1}/>} />
        <Featured header="Featured Projects" customphotoarray={projectphotoarray} />
        <hr className="border-blue-900 mt-5"></hr>
        <HeaderDiv2 header="How We Do It" content={<CardGrid cols={3} cards={cards2} card_type={2}/>}/>

        <Footer />
    </div>
  )
}

export default Home;