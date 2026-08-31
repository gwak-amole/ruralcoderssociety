import ProjectCarousel from "./ProjectCarousel"

const featured = ({header, customphotoarray = []}) => {
    return(
        <div className="p-5 pt-15 bg-blue-300 rounded-3xl bg-linear-to-b from-gray-100 to-transparent">
            <h1 className="text-6xl font-title text-blue-950">{header}</h1>
                <div className="bg-blue-950 rounded-2xl mt-4">
                    <ProjectCarousel photoarray={customphotoarray}/>
                </div>
        </div>
    );
}

export default featured