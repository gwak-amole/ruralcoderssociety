import Carousel from "../components/Carousel";
import JoinButton from "../components/Button"
import CardGrid from "../components/CardGrid";
import HeaderDiv from "../components/HeaderDiv";
import HeaderDiv2 from "../components/HeaderDiv2";
import Footer from "../components/Footer";



function Home() {
  const cards = [
  {number: 2000, prefix: "$", suffix: null, desc: "raised for RCS programs", key: 1},
  {number: 9, prefix: null, suffix: "+", desc: "countries represented", key: 2},
  {number: 15, prefix: null, suffix: "+", desc: "teens involved in RCS", key: 3}
  ]
  const cards2 =[
    {header: "Adventure", desc: "To broaden rural viewpoints, we bring rural kids to international adventures, whether it be coding competitions or projects.", key: 1},
    {header: "Coding Sprints", desc: "We hold weekly 2-4 hour coding groups to hone coding skills through hands-on mini projects.", key: 2},
    {header: "Fundraising", desc: "From local initiatives to corporate partners, we make sure to cover potential travel expenses from our international adventures.", key: 3}
  ]
  return (
    <div className="h-144 w-full bg-blue-950 text-center">
        <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">Coding for <span className="text-amber-400">Every Zip Code</span></h1>
        <JoinButton />
        <Carousel />
        <HeaderDiv header="Our Impact" content={<CardGrid cols={3} cards={cards} card_type={1}/>} />
        <HeaderDiv2 header="How We Do It" content={<CardGrid cols={3} cards={cards2} card_type={2}/>}/>
        <Footer />
    </div>
  )
}

export default Home;