
const InfoCard = ({ number = "", desc = ""}) => {
    return(
        <div className="border-8 border-blue-900 p-5 m-3 w-100 rounded-3xl bg-blue-950">
            <h1 className="text-4xl font-semibold m-5 text-amber-300">{number}</h1>
            <p className="m-3">{desc}</p>
        </div>
    );
}

export default InfoCard;