import axios from  'axios';

import { getCryptoCurrencyData } from "./CryptoCurrencyService";
import { Mock_CryptoCurrency } from "./Cryptocurrency.mock";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('fetches currency data from an API', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: Mock_CryptoCurrency});
    const data = await getCryptoCurrencyData();
    expect(data.data).toEqual(Mock_CryptoCurrency);
});