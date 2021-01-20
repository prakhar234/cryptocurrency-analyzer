import styles from "./CardList.module.css";
import Card from "../Card/Card";
import { CryptoCurrency } from "../../Services/CryptoCurrency/CryptoCurrency.model";

interface CardListProps {
    cardList: CryptoCurrency[];
}

const CardList: React.FC<CardListProps> = ({cardList}) => {
    const list = cardList.map(card => {
        return <Card key={card.id} title={card.name} prices={card.prices} code={card.symbol} />
    })
    return (
        <div data-testid="card-list" className={styles.CardList}>
            {list}
        </div>
    )
};

export default CardList;