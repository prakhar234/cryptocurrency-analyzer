import axios from "axios";

import { CryptoCurrencyResponse }  from "./CryptoCurrency.model";


const URL_GET_CURRENCY_DATA =
  `http://localhost:5000/api/currency`;

export const getCryptoCurrencyData = (): Promise<{data: CryptoCurrencyResponse}> => {
  return axios.get(URL_GET_CURRENCY_DATA);
};
