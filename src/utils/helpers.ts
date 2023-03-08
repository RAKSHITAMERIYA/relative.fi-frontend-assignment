interface CurrencyOption {
  maximumFractionDigits?: number;
}

export const isNullOrUndefined = (value: any) => {
  return value === null || value === undefined;
};

export const formatCurrency = (value: number, options?: CurrencyOption) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: isNullOrUndefined(options?.maximumFractionDigits)
      ? 12
      : options?.maximumFractionDigits,
  });
};
