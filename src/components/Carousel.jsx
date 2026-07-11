import { React } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import photo1 from "../assets/photo1.jpg"
import photo2 from "../assets/photo2.jpg"
import photo3 from "../assets/photo3.jpg"
import photo4 from "../assets/photo4.jpg"
import photo5 from "../assets/photo5.png"

const imageStyle = {
  height: '350px',
  borderRadius: '20px',
  border: '1px solid black',
}

function Carousel() {
  return (
    <div className="relative flex w-full p-5 justify-center my-8">
      <div className="container w-full mx-auto relative z-20 overflow-x-hidden">
        <Splide
          options = {{
            type: "loop",
            autoplay: true,
            interval: 3000,
            speed: 800,
            pauseOnHover: false,
            pauseOnFocus: false,
            perPage: 1,
            perMove: 1,
            arrows: false,
            pagination: false,
            fixedWidth: '500px',
            gap: '12px',
          }}
        >
          <SplideSlide>
            <img src={photo1} alt="RCS Photo 1" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={photo2} alt="RCS Photo 2" style={imageStyle}/>
          </SplideSlide>
          <SplideSlide>
            <img src={photo3} alt="RCS Photo 3" style={imageStyle}/>
          </SplideSlide>
          <SplideSlide>
            <img src={photo4} alt="RCS Photo 4" style={imageStyle}/>
          </SplideSlide>
          <SplideSlide>
            <img src={photo5} alt="RCS Photo 5" style={imageStyle}/>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  )

}

export default Carousel;