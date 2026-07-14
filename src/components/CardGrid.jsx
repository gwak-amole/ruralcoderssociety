import InfoCard from "./InfoCard";

const CardGrid = ({cols = 1, cards}) => {

    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4"
    }
    return(
        <div className={`grid place-items-center ${gridCols[cols]} text-center p-12 pt-5`}>
            {cards.map(card => (<InfoCard key={card.key} number={card.number} desc={card.desc} />))}
        </div>
    );
}

export default CardGrid