import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(null);

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
