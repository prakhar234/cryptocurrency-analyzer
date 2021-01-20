import { render, screen } from '@testing-library/react';

import Card from './Card';
import { Mock_CryptoCurrency } from "../../Services/CryptoCurrency/Cryptocurrency.mock";
import { Mock_ExchangeRates } from "../../Services/ExchangeRate/ExchangeRates.mock";
import CryptoCurrencyUtils from "../../Services/CryptoCurrency/CryptoCurrencyUtils";


test('renders Card Title correctly', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    const { name, prices, symbol } = searchResult[0];
    render(<Card title={name} prices={prices} code={symbol} />);
    const cardTitle = screen.getByText(/Bitcoin - BTC/);
    expect(cardTitle).toBeInTheDocument();
});

test('renders EUR price', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    const { name, prices, symbol } = searchResult[0];
    render(<Card title={name} prices={prices} code={symbol} />);
    const cardTitle = screen.getByText(/29841.83/);
    expect(cardTitle).toBeInTheDocument();
});

test('renders AUD price', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    const { name, prices, symbol } = searchResult[0];
    render(<Card title={name} prices={prices} code={symbol} />);
    const cardTitle = screen.getByText(/46791.99/);
    expect(cardTitle).toBeInTheDocument();
});

test('renders GBP price', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    const { name, prices, symbol } = searchResult[0];
    render(<Card title={name} prices={prices} code={symbol} />);
    const cardTitle = screen.getByText(/26558.63/);
    expect(cardTitle).toBeInTheDocument();
});
