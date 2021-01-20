import { render, screen } from '@testing-library/react';

import CardList from './CardList';
import { Mock_CryptoCurrency } from "../../Services/CryptoCurrency/Cryptocurrency.mock";
import { Mock_ExchangeRates } from "../../Services/ExchangeRate/ExchangeRates.mock";
import CryptoCurrencyUtils from "../../Services/CryptoCurrency/CryptoCurrencyUtils";


test('renders list of Cards', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    render(<CardList cardList={searchResult} />);
    const cards = screen.queryAllByTestId('card');
    expect(cards?.length).toBe(2);
});
