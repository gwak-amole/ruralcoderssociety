import Carousel from "../components/Carousel";
import JoinButton from "../components/Button"
import CardGrid from "../components/CardGrid";
import HeaderDiv from "../components/HeaderDiv";

function Home() {
  const cards = [
  {number: "$2000+", desc: "raised for RCS programs", key: 1},
  {number: "9+", desc: "countries represented", key: 2},
  {number: "15+", desc: "teens involved in RCS", key: 3}
  ]
  return (
    <div className="h-144 w-full bg-blue-950 text-center">
        <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">Coding for <span className="text-amber-400">Every Zip Code</span></h1>
        <JoinButton />
        <Carousel />
        <HeaderDiv header="Our Impact" content={<CardGrid cols={3} cards={cards} />} />
    </div>
  )
}

export default Home;