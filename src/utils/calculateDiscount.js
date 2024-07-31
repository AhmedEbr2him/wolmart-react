const calculateDiscount = (newPrice, oldPrice) => {
  if (oldPrice <= 0 || newPrice <= 0) return 0;

  const disocuntPercentage = Math.abs(((oldPrice - newPrice) / oldPrice) * 100);
  return disocuntPercentage;
};
export default calculateDiscount;
