import { ExchangeRates } from "../ExchangeRate/ExchangeRate.model";
import { CryptoCurrency, CryptoCurrencyResponse } from "./CryptoCurrency.model";

class CryptoCurrencyUtils {
    
    transformCryptoCurrencyData(data: CryptoCurrencyResponse, exchangeRates: ExchangeRates) {
        let transformedData: CryptoCurrency[] = [];
        transformedData = data.data.map(currencyData => {
            const prices = Object.keys(exchangeRates.rates).map(rateKey => {
                return {
                    currencyName: rateKey,
                    currencyRate: exchangeRates.rates[rateKey] * currencyData.quote.EUR.price
                }
            });
            prices.unshift({currencyName: 'EUR', currencyRate: currencyData.quote.EUR.price});
            return {
                id: currencyData.id,
                name: currencyData.name,
                symbol: currencyData.symbol,
                slug: currencyData.slug,
                cmc_rank: currencyData.cmc_rank,
                last_updated: currencyData.last_updated,
                prices
            }
        });
        return transformedData;
    }
    searchCryptoCurrencies(input: string, currencyData: CryptoCurrency[]) {
        if(input === '') {
            return [];
        }
        let result: CryptoCurrency[] = [];
        result = currencyData.filter(currency => {
            return currency.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0 || currency.symbol.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0;
        });
        return result;
    }
}

export default new CryptoCurrencyUtils();