import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(null);

  /* COUNTRIES */
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('usa');
  const [state, setStates] = useState([]);

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

  useEffect(() => {
    getCountries();
  }, []);

  /* SET DEFAULT COUNTRY WHEN APP START */
  useEffect(() => {
    const defaultCountry = countries.find(country => country.value === selectedCountry);
    defaultCountry && setStates(defaultCountry.states);
  }, [selectedCountry, countries]);

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
