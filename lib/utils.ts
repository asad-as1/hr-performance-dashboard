export const getFullName = (first: string, last: string) => `${first} ${last}`;

export const getAverage = (ratings: number[]) => {
  if (ratings.length === 0) return 0;
  return (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1);
};

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};
