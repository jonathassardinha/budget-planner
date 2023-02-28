const defaultFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'narrowSymbol',
});

const noDecimalFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 0,
});

export const currencyFormatter = (value: number) => {
  if (Math.abs(value) >= 1_000_000_000) {
    return `${noDecimalFormatter.format(value / 1_000_000_000)} bi`;
  }

  if (Math.abs(value) >= 1_000_000) {
    return `${noDecimalFormatter.format(value / 1_000_000)} mi`;
  }

  if (Math.abs(value) >= 100_000) {
    return `${noDecimalFormatter.format(value / 1_000)} mil`;
  }

  return defaultFormatter.format(value);
};
