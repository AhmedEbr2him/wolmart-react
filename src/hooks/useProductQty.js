import { useState } from 'react';

export const useProductQty = () => {
  const [productQty, setProductQty] = useState(1);
  const handleDecreaseQty = () => {
    if (productQty > 1) {
      setProductQty(productQty - 1);
    }
  };
  const handleIncreaseQty = () => {
    if (productQty < 9) {
      setProductQty(productQty + 1);
    }
  };
  const handleOnChangeQty = e => {
    const value = e.target.value;
    if (value === '' || (value >= 0 && value <= 9)) {
      setProductQty(Number(value));
    }
  };

  return { handleDecreaseQty, handleIncreaseQty, handleOnChangeQty, productQty };
};
