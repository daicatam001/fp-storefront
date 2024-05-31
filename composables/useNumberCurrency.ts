export const useNumberCurrency = (value: number,currency:string) => {
    return value.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,}) + ' ' + currency
}