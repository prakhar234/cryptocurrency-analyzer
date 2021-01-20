import axios from  'axios';

import { getExchangeRates } from "./ExchangerRatesService";
import { Mock_ExchangeRates } from "./ExchangeRates.mock";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('fetches exchange rates from an API', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: Mock_ExchangeRates});
    const data = await getExchangeRates();
    expect(data.data).toEqual(Mock_ExchangeRates);
})