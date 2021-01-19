import {  CryptoCurrencyResponse } from "./CryptoCurrency.model";

export const Mock_CryptoCurrency: CryptoCurrencyResponse = {
    status: {
        timestamp: "2021-01-16T23:26:26.291Z",
        error_code: 0,
        error_message: null,
        elapsed: 18,
        credit_count: 1,
        notice: null,
        total_count: 4086
    },
    data: [
        {
            id: 1,
            name: "Bitcoin",
            symbol: "BTC",
            slug: "bitcoin",
            num_market_pairs: 9829,
            date_added: "2013-04-28T00:00:00.000Z",
            tags: [
                "mineable",
                "pow",
                "sha-256",
                "store-of-value",
                "state-channels"
            ],
            max_supply: 21000000,
            circulating_supply: 18602412,
            total_supply: 18602412,
            platform: null,
            cmc_rank: 1,
            last_updated: "2021-01-16T23:24:02.000Z",
            quote: {
                EUR: {
                    price: 29841.829631400265,
                    volume_24h: 47238463598.163376,
                    percent_change_1h: -1.30716519,
                    percent_change_24h: -1.02935128,
                    percent_change_7d: -12.67430925,
                    market_cap: 555130009637.1158,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 1027,
            name: "Ethereum",
            symbol: "ETH",
            slug: "ethereum",
            num_market_pairs: 6059,
            date_added: "2015-08-07T00:00:00.000Z",
            tags: [
                "mineable",
                "pow",
                "smart-contracts"
            ],
            max_supply: null,
            circulating_supply: 114280604.8115,
            total_supply: 114280604.8115,
            platform: null,
            cmc_rank: 2,
            last_updated: "2021-01-16T23:25:03.000Z",
            quote: {
                EUR: {
                    price: 1009.1187804716989,
                    volume_24h: 26288567753.843143,
                    percent_change_1h: -3.00862912,
                    percent_change_24h: 4.5496543,
                    percent_change_7d: -7.27937569,
                    market_cap: 115322704558.94904,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 825,
            name: "Tether",
            symbol: "USDT",
            slug: "tether",
            num_market_pairs: 10051,
            date_added: "2015-02-25T00:00:00.000Z",
            tags: [
                "store-of-value",
                "payments",
                "stablecoin",
                "stablecoin-asset-backed"
            ],
            max_supply: null,
            circulating_supply: 24290132870.86423,
            total_supply: 25131104623.125328,
            platform: {
                id: 1027,
                name: "Ethereum",
                symbol: "ETH",
                slug: "ethereum",
                token_address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
            },
            cmc_rank: 3,
            last_updated: "2021-01-16T23:25:13.000Z",
            quote: {
                EUR: {
                    price: 0.8282679004353579,
                    volume_24h: 83225213596.8112,
                    percent_change_1h: -0.20626416,
                    percent_change_24h: -0.66380677,
                    percent_change_7d: -1.83297456,
                    market_cap: 20118737354.246593,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 6636,
            name: "Polkadot",
            symbol: "DOT",
            slug: "polkadot-new",
            num_market_pairs: 114,
            date_added: "2020-08-19T00:00:00.000Z",
            tags: [
                "substrate",
                "polkadot",
                "binance-chain"
            ],
            max_supply: null,
            circulating_supply: 900805036.2253599,
            total_supply: 1034864253.9163299,
            platform: null,
            cmc_rank: 4,
            last_updated: "2021-01-16T23:26:05.000Z",
            quote: {
                EUR: {
                    price: 14.934657677968227,
                    volume_24h: 7078465598.334461,
                    percent_change_1h: -1.07292878,
                    percent_change_24h: 36.98192948,
                    percent_change_7d: 85.0046038,
                    market_cap: 13453214850.615519,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 52,
            name: "XRP",
            symbol: "XRP",
            slug: "xrp",
            num_market_pairs: 680,
            date_added: "2013-08-04T00:00:00.000Z",
            tags: [
                "medium-of-exchange",
                "enterprise-solutions",
                "binance-chain"
            ],
            max_supply: 100000000000,
            circulating_supply: 45404028640,
            total_supply: 99990831162,
            platform: null,
            cmc_rank: 5,
            last_updated: "2021-01-16T23:26:02.000Z",
            quote: {
                EUR: {
                    price: 0.23165015618100024,
                    volume_24h: 3379955254.8860297,
                    percent_change_1h: -1.1301372,
                    percent_change_24h: 0.00254832,
                    percent_change_7d: -16.73894327,
                    market_cap: 10517850325.702608,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 2010,
            name: "Cardano",
            symbol: "ADA",
            slug: "cardano",
            num_market_pairs: 221,
            date_added: "2017-10-01T00:00:00.000Z",
            tags: [
                "mineable",
                "dpos",
                "pos",
                "platform",
                "research",
                "smart-contracts",
                "staking",
                "binance-chain"
            ],
            max_supply: 45000000000,
            circulating_supply: 31112484646,
            total_supply: 45000000000,
            platform: null,
            cmc_rank: 6,
            last_updated: "2021-01-16T23:25:13.000Z",
            quote: {
                EUR: {
                    price: 0.2855125081407373,
                    volume_24h: 3642183695.5232677,
                    percent_change_1h: -2.38261415,
                    percent_change_24h: 13.92060279,
                    percent_change_7d: 1.55910462,
                    market_cap: 8883003525.76964,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 2,
            name: "Litecoin",
            symbol: "LTC",
            slug: "litecoin",
            num_market_pairs: 745,
            date_added: "2013-04-28T00:00:00.000Z",
            tags: [
                "mineable",
                "pow",
                "scrypt",
                "medium-of-exchange",
                "binance-chain"
            ],
            max_supply: 84000000,
            circulating_supply: 66294078.55005994,
            total_supply: 66294078.55005994,
            platform: null,
            cmc_rank: 7,
            last_updated: "2021-01-16T23:26:02.000Z",
            quote: {
                EUR: {
                    price: 118.39365814686582,
                    volume_24h: 5904737931.665274,
                    percent_change_1h: -1.85926005,
                    percent_change_24h: 1.25880454,
                    percent_change_7d: -20.45319922,
                    market_cap: 7848798473.017267,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 1831,
            name: "Bitcoin Cash",
            symbol: "BCH",
            slug: "bitcoin-cash",
            num_market_pairs: 593,
            date_added: "2017-07-23T00:00:00.000Z",
            tags: [
                "mineable",
                "marketplace",
                "enterprise-solutions",
                "binance-chain"
            ],
            max_supply: 21000000,
            circulating_supply: 18629175,
            total_supply: 18629175,
            platform: null,
            cmc_rank: 8,
            last_updated: "2021-01-16T23:25:11.000Z",
            quote: {
                EUR: {
                    price: 403.98533625173394,
                    volume_24h: 5217143574.024952,
                    percent_change_1h: -1.35637982,
                    percent_change_24h: 0.95298679,
                    percent_change_7d: -12.28419304,
                    market_cap: 7525913526.467397,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 1975,
            name: "Chainlink",
            symbol: "LINK",
            slug: "chainlink",
            num_market_pairs: 433,
            date_added: "2017-09-20T00:00:00.000Z",
            tags: [
                "platform",
                "defi",
                "oracles",
                "smart-contracts",
                "substrate",
                "polkadot"
            ],
            max_supply: 1000000000,
            circulating_supply: 401509556.4344444,
            total_supply: 1000000000,
            platform: {
                id: 1027,
                name: "Ethereum",
                symbol: "ETH",
                slug: "ethereum",
                token_address: "0x514910771af9ca656af840dff83e8264ecf986ca"
            },
            cmc_rank: 9,
            last_updated: "2021-01-16T23:25:13.000Z",
            quote: {
                EUR: {
                    price: 16.737231821246496,
                    volume_24h: 4545016884.088582,
                    percent_change_1h: -2.57374637,
                    percent_change_24h: 1.31905409,
                    percent_change_7d: 16.09670582,
                    market_cap: 6720158524.489149,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        },
        {
            id: 512,
            name: "Stellar",
            symbol: "XLM",
            slug: "stellar",
            num_market_pairs: 335,
            date_added: "2014-08-05T00:00:00.000Z",
            tags: [
                "medium-of-exchange",
                "enterprise-solutions",
                "decentralized-exchange",
                "smart-contracts"
            ],
            max_supply: 50001806812,
            circulating_supply: 22095601010.959892,
            total_supply: 50001803555.87172,
            platform: null,
            cmc_rank: 10,
            last_updated: "2021-01-16T23:26:05.000Z",
            quote: {
                EUR: {
                    price: 0.24126483508207514,
                    volume_24h: 1298145623.6132078,
                    percent_change_1h: -1.41572569,
                    percent_change_24h: 3.18185713,
                    percent_change_7d: -8.64525947,
                    market_cap: 5330891533.948571,
                    last_updated: "2021-01-16T23:26:04.000Z"
                }
            }
        }
    ]
}
    