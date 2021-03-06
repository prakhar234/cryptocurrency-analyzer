import axios from "axios";

import { CryptoCurrencyResponse }  from "./CryptoCurrency.model";


const URL_GET_CURRENCY_DATA =
  `/api/currency`;

export const getCryptoCurrencyData = (): Promise<{data: CryptoCurrencyResponse}> => {
  return axios.get(URL_GET_CURRENCY_DATA);
};

