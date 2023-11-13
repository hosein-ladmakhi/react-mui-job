export const numberFormat = (value?: number) =>
   new Intl.NumberFormat("en-US", { minimumIntegerDigits: 3 }).format(
      value || 0
   );
