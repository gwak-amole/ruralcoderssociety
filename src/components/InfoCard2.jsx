const InfoCard2 = ({ header = "", desc = "", image_link }) => {
    return(
        <div className="border-2 p-8 m-2 w-96 rounded-3xl bg-blue-100 border-amber-800 hover:-translate-y-0.5 hover:bg-white duration-150 ease-in-out">
            <h1 className="text-4xl font-semibold m-5 text-blue-950">{header}</h1>
            <p className="m-3 text-xl text-blue-950">{desc}</p>
            <img src={image_link}></img>
        </div>
    );
}

export default InfoCard2;