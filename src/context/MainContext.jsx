import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContext } from '../components/Toast/ToastProvider';
import { routesConstatns } from '../constants/routesConstants';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(null);
  const [isQuickViewActive, setIsQuickViewActive] = useState(null);

  /* COUNTRIES */
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [state, setStates] = useState([]);
  const { handleToastMessage } = useContext(ToastContext);
  const [quickViewData, setQuickViewData] = useState(() => {
    const savedProductId = localStorage.getItem('product_id');
    return JSON.parse(savedProductId) || {};
  });

  const [storedProducts, setStoredProducts] = useState(() => {
    const savedProducts = localStorage.getItem('savedProducts');
    return (
      JSON.parse(savedProducts) || {
        products: {
          favorite: [],
          cart: [],
        },
      }
    );
  });

  const openDrawer = () => {
    setIsDrawerActive(true);
    setIsCartActive(false);
    setIsFilterOpen(false);
  };

  const closeDrawer = () => {
    setIsDrawerActive(false);
  };

  const openCart = () => {
    setIsCartActive(true);
    setIsDrawerActive(false);
    setIsFilterOpen(false);
  };
  const closeCart = () => {
    setIsCartActive(false);
  };

  const openFilter = () => {
    setIsCartActive(false);
    setIsDrawerActive(false);
    setIsFilterOpen(true);
  };
  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const closeQuickView = () => {
    setIsQuickViewActive(false);
  };

  /* CONTRIES */
  const getCountries = async () => {
    try {
      const response = await fetch('/data.json');
      if (response.ok) {
        const data = await response.json();
        setCountries(data.country);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectCountry = e => {
    const selectedValue = e.target.value;
    setSelectedCountry(selectedValue);
    const country = countries.find(country => country.value === selectedValue);

    if (country) {
      setStates(country.states);
    } else {
      setStates([]);
    }
  };

  const addToFavorite = (product, id) => {
    const savedFavoriteProducts = { ...storedProducts };
    const favoriteProducts = savedFavoriteProducts.products.favorite;
    const productIndex = favoriteProducts.findIndex(item => item.id === id);

    if (productIndex > -1) {
      favoriteProducts.splice(productIndex, 1);
      handleToastMessage('Removed from', routesConstatns.WISHLIST, 'Wishlist', true, 3500);
    } else {
      favoriteProducts.push({ ...product, quantity: 1 });

      handleToastMessage('Added to', routesConstatns.WISHLIST, 'Wishlist', true, 3500);
    }
    setStoredProducts(savedFavoriteProducts);
    localStorage.setItem('savedProducts', JSON.stringify(savedFavoriteProducts));
  };

  const addToCart = (product, id) => {
    const updadtedProducts = { ...storedProducts };
    const cartProducts = updadtedProducts.products.cart;
    const productIndex = cartProducts.findIndex(item => item.id === id);

    if (productIndex > -1) {
      cartProducts[productIndex].quantity += 1;

      handleToastMessage('Added to', routesConstatns.CART, 'Cart', true, 3500);
    } else {
      cartProducts.push({ ...product, quantity: 1 });
      handleToastMessage('Added to', routesConstatns.CART, 'Cart', true, 3500);
    }

    setStoredProducts(updadtedProducts);
    localStorage.setItem('savedProducts', JSON.stringify(updadtedProducts));
  };

  const removeFromProductList = (type, id) => {
    const updadtedProducts = { ...storedProducts };
    const productList = updadtedProducts.products[type];
    const productIndex = productList.findIndex(item => item.id === id);

    // Remove the product from the array if it exists
    if (productIndex > -1) {
      productList.splice(productIndex, 1);

      // Update the state with the new product list
      setStoredProducts(updadtedProducts);
    }

    // Save the updated data to localStorage
    localStorage.setItem('savedProducts', JSON.stringify(updadtedProducts));
  };

  const quickView = data => {
    setQuickViewData(data);
    setIsCartActive(false);
    setIsDrawerActive(false);
    setIsFilterOpen(false);
    setIsQuickViewActive(true);
  };
  useEffect(() => {
    getCountries();
  }, []);

  /* SET DEFAULT COUNTRY WHEN APP START */
  useEffect(() => {
    const defaultCountry = countries.find(country => country.value === selectedCountry);
    defaultCountry && setStates(defaultCountry.states);
  }, [selectedCountry, countries]);

  /* RENDER STORED PRODUCT */
  useEffect(() => {
    localStorage.setItem('savedProducts', JSON.stringify(storedProducts));
  }, [storedProducts]);

  useEffect(() => {
    localStorage.setItem('product_id', JSON.stringify(quickViewData));
  }, [quickViewData]);

  return (
    <MainContext.Provider
      value={{
        isDrawerActive,
        openDrawer,
        closeDrawer,
        isCartActive,
        openCart,
        closeCart,
        isFilterOpen,
        openFilter,
        closeFilter,
        /* COUNTRIES */
        countries,
        selectedCountry,
        state,
        handleSelectCountry,
        addToCart,
        addToFavorite,
        storedProducts,
        setStoredProducts,
        removeFromProductList,
        quickView,
        quickViewData,
        closeQuickView,
        isQuickViewActive,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProviderContext };

MainProviderContext.propTypes = {
  children: PropTypes.node,
};
