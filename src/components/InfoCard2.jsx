const InfoCard2 = ({ header = "", desc = ""}) => {
    return(
        <div className="border-2 p-8 m-2 w-96 rounded-3xl bg-white border-amber-400">
            <h1 className="text-4xl font-semibold m-5 text-blue-950">{header}</h1>
            <p className="m-3 text-xl text-blue-950">{desc}</p>
        </div>
    );
}

export default InfoCard2;