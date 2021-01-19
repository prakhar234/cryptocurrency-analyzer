import axios from "axios";

import { ExchangeRates }  from "./ExchangeRate.model";



const URL_GET_EXCHANGE_RATES =
  `https://api.exchangeratesapi.io/latest?symbols=USD,GBP,BRL,AUD`;

export const getExchangeRates = (): Promise<{data: ExchangeRates}> => {
  return axios.get(URL_GET_EXCHANGE_RATES);
};
