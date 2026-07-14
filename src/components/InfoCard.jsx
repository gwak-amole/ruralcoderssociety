
const InfoCard = ({ number = "", desc = ""}) => {
    return(
        <div className="border-4 border-blue-900 p-5 m-3 w-100 rounded-3xl">
            <h1 className="text-4xl font-semibold m-5">{number}</h1>
            <p className="m-3">{desc}</p>
        </div>
    );
}

export default InfoCard;