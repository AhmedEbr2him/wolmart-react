/* RETURN -1 MEANING THE TEASTING OF FIND INDEX NOT FOUND ANY ELEMENT WITH SAME ID */

import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
export const useProductQty = () => {
  const { setStoredProducts, storedProducts } = useContext(MainContext);
  const updatedProducts = { ...storedProducts };
  const cartProducts = updatedProducts.products.cart;

  const handleIncreaseQty = id => {
    const productIndex = cartProducts.findIndex(item => item.id === id);

    if (productIndex !== -1 && cartProducts[productIndex].quantity < 9) {
      cartProducts[productIndex].quantity += 1;
    }
    setStoredProducts(updatedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));
  };

  const handleDecreaseQty = id => {
    // Create a new copy of the stored products to avoid direct mutation
    const productIndex = cartProducts.findIndex(item => item.id === id);
    if (productIndex !== -1 && cartProducts[productIndex].quantity > 0) {
      cartProducts[productIndex].quantity -= 1;
    }
    setStoredProducts(updatedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));
  };

  const handleOnChangeQty = (e, id) => {
    const productIndex = cartProducts.findIndex(item => item.id === id);
    const value = e.target.value;
    if (value === '' || (value >= 0 && value <= 9)) {
      cartProducts[productIndex].quantity = Number(value);
    }
    setStoredProducts(updatedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updatedProducts));
  };

  return { handleIncreaseQty, handleDecreaseQty, handleOnChangeQty };
};
