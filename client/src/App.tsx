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
        const [ exchangeRates, data ] = await Promise.all([getExchangeRates(), getCryptoCurrencyData()])
        const currencyData = CryptoCurrencyUtils.transformCryptoCurrencyData(data.data, exchangeRates.data);
        setCurrencyData(currencyData);
        setLoading(false);

      } catch(err) {
        handleError('There is a network error! Please try again after some time.');
      }
      
    }
    getCurrencyData();
  }, []);

  const handleError = (error: string) => {
    setError(error);
    setLoading(false);
  }

  const handleInputChange = (input: string) => {
    setSearchQuery(input);
    const searchResult = CryptoCurrencyUtils.searchCryptoCurrencies(input, currencyData);
    setSearchResult(searchResult);
    if(searchResult.length === 0 && input !== '' ) {
      setError(`Please search again! We could not find any crypto currency with name or code ${input}`);
    } else {
      setError('');
    }
  }

  let cardList = null;
  if(searchQuery && searchResult.length) {
    cardList = <CardList cardList={searchResult} />
  } else if(searchQuery && !searchResult.length || error) {
    cardList = <div className="error-message">{error}</div>
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

  return (
    <div className="App">
      <PageTitle title={title} />
      {appContent}
    </div>
  );
}

export default App;
