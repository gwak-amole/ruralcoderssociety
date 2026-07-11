import Carousel from "../components/Carousel";
import JoinButton from "../components/Button"

function Home() {
  return (
    <div className="h-full w-full bg-blue-950 text-center">
        <h1 className="font-title text-7xl text-center p-32 pt-15 font-semibold text-white pb-8">Coding for <span className="text-yellow-300">Every Zip Code</span></h1>
        <JoinButton />
        <Carousel />
    </div>
  )
}

export default Home;