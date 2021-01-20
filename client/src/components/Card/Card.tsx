import styles from "./Card.module.css";
import { Price } from "../../Services/CryptoCurrency/CryptoCurrency.model";

interface CardProps {
    title: string,
    prices: Price[],
    code: string,

}

const Card: React.FC<CardProps> = (props) => {
    const { title, prices, code } = props;
    const pricesElement = prices.map(price => {
        let symbol = null;
        switch(price.currencyName) {
            case 'AUD':
                symbol = <span>	&#36;</span>
                break;
            case 'BRL':
                symbol = <span>&#82;&#36;</span>
                break;
            case 'GBP':
                symbol = <span>&#xa3;</span>
                break;
            case 'USD':
                symbol = <span>&#x24;</span>
                break;
            default:
                symbol = <span>&#128;</span>
        }
        return (
            <div className={styles.CardPrice} key={price.currencyName}>
                <div>{ price.currencyName}</div>
                <div>{symbol} { price.currencyRate.toFixed(2)}</div>
            </div>
        )
    });
    let classes = ['card', styles.Card];
    return (
        <div data-testid="card" className={classes.join(' ')}>
            <div className={styles.CardTitle}>{ title } - { code }</div>
            <h5>Rates: -</h5>
            <div className={styles.CardPrices}>
                {pricesElement}
            </div>
        </div>
    )
    
};

export default Card;