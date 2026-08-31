import ProjectCarousel from "./ProjectCarousel"

const featured = ({header, customphotoarray = []}) => {
    return(
        <div>
            <h1>{header}</h1>
            <ProjectCarousel photoarray={customphotoarray}/>
        </div>
    );
}

export default featured