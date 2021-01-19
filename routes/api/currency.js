const express = require('express');
const config = require('config');
const rp = require('request-promise');

const router = express.Router();

const coinMarketAPI = config.get('coinMarketAPI');

// @route GET api/currency
// desc get cryptocurrencies
// @access public
router.get('/', async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qs: {
          'start': '1',
          'limit': '5000',
          'convert': 'EUR'
        },
        headers: {
          'X-CMC_PRO_API_KEY': `${coinMarketAPI}`
        },
        json: true,
        gzip: true
      };
  const currencies = await rp(requestOptions);
  res.json(currencies);
});

module.exports = router;
