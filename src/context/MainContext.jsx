import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToastContext } from '../components/Toast/ToastProvider';
import { routesConstatns } from '../constants/routesConstants';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(null);

  /* COUNTRIES */
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [state, setStates] = useState([]);
  const { handleToastMessage } = useContext(ToastContext);

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

  /* ADDED TO CART AND FAVORITE */
  const [storedProduct, setStoredProduct] = useState(() => {
    const savedProducts = localStorage.getItem('savedProducts');
    return savedProducts
      ? JSON.parse(savedProducts)
      : {
          products: {
            favorite: {},
            cart: {},
          },
        };
  });

  const addToFavorite = (product, id) => {
    const savedFavorite = JSON.parse(localStorage.getItem('savedProducts'));
    const favoriteProduct = savedFavorite.products.favorite;

    if (favoriteProduct[id]) {
      delete favoriteProduct[id];
      handleToastMessage('Removed from', routesConstatns.WISHLIST, 'Wishlist', true, 3500);
    } else {
      favoriteProduct[id] = product;
      handleToastMessage('Added to', routesConstatns.WISHLIST, 'Wishlist', true, 3500);
    }
    setStoredProduct(savedFavorite);
  };

  const addToCart = (product, id) => {
    const savedFavorite = JSON.parse(localStorage.getItem('savedProducts'));
    const cartProduct = savedFavorite.products.cart;

    if (cartProduct[id]) {
      delete cartProduct[id];
      handleToastMessage('Removed from', routesConstatns.CART, 'Cart', true, 3500);
    } else {
      cartProduct[id] = product;
      handleToastMessage('Added to', routesConstatns.CART, 'Cart', true, 3500);
    }

    setStoredProduct(savedFavorite);
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
    localStorage.setItem('savedProducts', JSON.stringify(storedProduct));
  }, [storedProduct]);

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
