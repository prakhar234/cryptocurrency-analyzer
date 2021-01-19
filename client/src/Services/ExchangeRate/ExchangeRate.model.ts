
export interface ExchangeRates {
    rates: ExchangeRate,
    base: string,
    date: string
}

export interface ExchangeRate {
    [currency: string]: number,
}