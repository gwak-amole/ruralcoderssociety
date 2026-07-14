import Carousel from "../components/Carousel";
import JoinButton from "../components/Button"
import InfoCard from "../components/InfoCard"

function Home() {
  return (
    <div className="h-144 w-full bg-blue-950 text-center">
        <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">Coding for <span className="text-amber-400">Every Zip Code</span></h1>
        <JoinButton />
        <Carousel />
        <InfoCard number="$2000+" desc="raised for RCS programs" />
    </div>
  )
}

export default Home;