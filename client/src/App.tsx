import React, { useEffect, useState } from 'react';

import './App.css';
import Search from "./components/Search/Search";
import PageTitle from "./components/PageTitle/PageTitle";
import CardList from "./components/CardList/CardList";
import { getCryptoCurrencyData } from "./Services/CryptoCurrency/CryptoCurrencyService";
import { getExchangeRates } from "./Services/ExchangeRate/ExchangerRatesService";
import { CryptoCurrency } from "./Services/CryptoCurrency/CryptoCurrency.model";
import CryptoCurrencyUtils from "./Services/CryptoCurrency/CryptoCurrencyUtils";
import Loader from "./components/Loader/Loader";

function App() {
  const title = "Cryptocurrency Analyser";
  const [ searchQuery, setSearchQuery ] = useState<string>("");
  const [ currencyData, setCurrencyData ] = useState<CryptoCurrency[]>([]);
  const [ searchResult, setSearchResult ] = useState<CryptoCurrency[]>([]);
  const [ error, setError ] = useState<string>('');
  const [ isLoading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getCurrencyData() {
      try {
        const data = await getCryptoCurrencyData();
        const exchangeRates = await getExchangeRates();
        const currencyData = CryptoCurrencyUtils.transformCryptoCurrencyData(data.data, exchangeRates.data);
        setCurrencyData(currencyData);
        setLoading(false);

      } catch(err) {
        setError('There is a network error! Please try again after some time.');
        setLoading(false);
      }
      
    }
    getCurrencyData();
  }, []);

  const handleInputChange = (input: string) => {
    setSearchQuery(input);
    if(input === '') {
      setSearchResult([]);
    } else {
      const searchResult = CryptoCurrencyUtils.searchCryptoCurrencies(input, currencyData);
      setSearchResult(searchResult);
      if(searchResult.length === 0 ) {
        setError(`Please search again! We could not find any crypto currency with ${input}`);
      } else {
        setError('');
      }
    }
  }

  let cardList = null;
  if(searchQuery && searchResult.length) {
    cardList = <CardList cardList={searchResult} />
  } else if(searchQuery && !searchResult.length) {
    cardList = <div>{error}</div>
  }

  let appContent = null;
  if(isLoading) {
    appContent = <Loader />
  }

  if(!isLoading && currencyData.length) {
    appContent = (
      <React.Fragment>
        <Search setSearchQuery={handleInputChange} />
        {cardList}
      </React.Fragment>
    )
  }

  if(error) {
    appContent = (
      <div className="error-message">{error}</div>
    )
  }

  return (
    <div className="App">
      <PageTitle title={title} />
      {appContent}
    </div>
  );
}

export default App;
