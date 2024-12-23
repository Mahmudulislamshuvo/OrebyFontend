export const calculateBeforePrice = (runningPrice, discountPercentage) => {
  return (runningPrice * 100) / (100 - discountPercentage);
};
