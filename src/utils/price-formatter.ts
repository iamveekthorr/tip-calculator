const formatPrice = (price: number): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
    currencySign: 'standard',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

export default formatPrice;
