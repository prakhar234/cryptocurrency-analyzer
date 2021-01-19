export interface CryptoCurrency {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    cmc_rank: number,
    last_updated: string,
    prices: Price[]
}

export interface Price {
    currencyName: string,
    currencyRate: number
}

export interface CryptoCurrencyResponse {
    status: CryptoCurrencyResponseStatus,
    data: CryptoCurrencyData[]
}

export interface CryptoCurrencyData {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    num_market_pairs: number,
    date_added: string,
    tags: string[],
    max_supply: number | null,
    circulating_supply: number,
    total_supply: number,
    platform: CryptoCurrencyPlatform | null,
    cmc_rank: number,
    last_updated: string,
    quote: CryptoCurrencyQuote
}

export interface CryptoCurrencyResponseStatus {
    timestamp: string,
    error_code: number,
    error_message: string | null,
    elapsed: number,
    credit_count: number,
    notice: string | null,
    total_count: number
}

export interface CryptoCurrencyPlatform {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    token_address: string
}

export interface CryptoCurrencyQuote {
    EUR: CryptoCurrencyPrice
}

export interface CryptoCurrencyPrice {
    price: number,
    volume_24h: number,
    percent_change_1h: number,
    percent_change_24h: number,
    percent_change_7d: number,
    market_cap: number,
    last_updated: string
}