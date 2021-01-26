import { ExchangeRates } from "../ExchangeRate/ExchangeRate.model";
import { CryptoCurrency, CryptoCurrencyResponse } from "./CryptoCurrency.model";

interface Memo {
    [key: string]: CryptoCurrency[]
}

class CryptoCurrencyUtils {

    // to return momoized results
    memo: Memo = {}
    
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
        if(this.memo[input]) {
            return this.memo[input];
        }
        let result: CryptoCurrency[] = [];
        result = currencyData.filter(currency => {
            return currency.name.toLocaleLowerCase().indexOf(
                input.toLocaleLowerCase()) >= 0 || 
                currency.symbol.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) >= 0;
        });
        this.memo[input] = result;
        return result;
    }
}

export default new CryptoCurrencyUtils();