import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const imageStyle = {
  height: '350px',
  borderRadius: '20px',
  border: 'none',
}

const ProjectCarousel = ({photoarray = []}) => {
    return (
        <div className="relative flex w-full p-5 justify-center my-3">
          <div className="w-full relative z-20">
            <Splide
              options = {{
                type: "loop",
                autoplay: true,
                interval: 3000,
                speed: 800,
                pauseOnHover: false,
                pauseOnFocus: true,
                perPage: 1,
                perMove: 1,
                arrows: false,
                pagination: false,
                fixedWidth: '500px',
                gap: '12px',
              }}
            >
            {photoarray.map(photo => (<SplideSlide img src={photo.file} alt="RCS Project" style={imageStyle}></SplideSlide>))}
            </Splide>
          </div>
        </div>
      )
}

export default ProjectCarousel