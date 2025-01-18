const MAX_YEAR = new Date().getFullYear();
const MIN_YEAR = 2015;
export const YEARS = Array.from({ length: MAX_YEAR - MIN_YEAR + 1 }, (_, index) => MIN_YEAR + index);
