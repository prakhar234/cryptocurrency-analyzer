import CryptoCurrencyUtils from './CryptoCurrencyUtils';
import { Mock_CryptoCurrency } from "./Cryptocurrency.mock";
import { Mock_ExchangeRates } from "../ExchangeRate/ExchangeRates.mock";

test('transforms data successfully', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    expect(transformedData).toHaveLength(10);
});

test('has a list of 5 prices in transformed Data', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    expect(transformedData[0].prices).toHaveLength(5);
});

test('gives correct number of search results', () => {
    const transformedData = CryptoCurrencyUtils.transformCryptoCurrencyData(Mock_CryptoCurrency, Mock_ExchangeRates);
    let searchResult = CryptoCurrencyUtils.searchCryptoCurrencies('bit', transformedData);
    expect(searchResult).toHaveLength(2);
    searchResult  = CryptoCurrencyUtils.searchCryptoCurrencies('', transformedData);
    expect(searchResult).toHaveLength(0);
});