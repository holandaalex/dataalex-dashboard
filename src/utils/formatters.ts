/**
 * Format a number as currency
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};

/**
 * Format a number with thousands separator
 */
export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

/**
 * Calculate growth percentage between two values
 */
export const calculateGrowth = (current: number, previous: number): number => {
  if (previous === 0) return 100;
  return Math.round(((current - previous) / previous) * 100);
};