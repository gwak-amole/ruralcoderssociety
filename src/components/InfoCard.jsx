
const InfoCard = ({ number = "", desc = ""}) => {
    return(
        <div className="border-0 p-8 m-3 w-100 rounded-3xl bg-blue-400">
            <h1 className="text-6xl font-semibold m-5 text-amber-300">{number}</h1>
            <p className="m-3 text-xl text-amber-400">{desc}</p>
        </div>
    );
}

export default InfoCard;