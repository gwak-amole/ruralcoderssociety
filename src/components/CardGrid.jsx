import InfoCard from "./InfoCard";
import InfoCard2 from "./InfoCard2";

const CardGrid = ({cols = 1, cards, card_type}) => {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4"
    }
    const cardTypes = {
        1: InfoCard,
        2: InfoCard2
    }

    const SelectedCard = cardTypes[card_type]

    return(
        <div className={`grid place-items-center ${gridCols[cols]} text-center p-12 pt-5`}>
            {cards.map(card => (<SelectedCard key={card.key} number={card.number} header={card.header} prefix={card.prefix} suffix={card.suffix} desc={card.desc} />))}
        </div>
    );
}

export default CardGrid