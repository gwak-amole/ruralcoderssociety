const InfoCard2 = ({ header = "", desc = "", image_link, height = 128}) => {
    return(
        <div className={`border-2 p-8 m-2 h-${height} w-96 rounded-3xl bg-blue-950 border-amber-400 hover:-translate-y-0.5 hover:bg-blue-900 duration-150 ease-in-out`}>
            <h1 className="text-4xl font-semibold m-5 text-blue-100 font-sans">{header}</h1>
            <p className="m-3 text-xl text-blue-100 font-desc">{desc}</p>
            <img className="border-amber-300 border-2 rounded-xl" src={image_link}></img>
        </div>
    );
}

export default InfoCard2;