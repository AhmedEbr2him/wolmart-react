import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);

  const openDrawer = () => {
    setIsDrawerActive(true);
    setIsCartActive(false);
  };

  const closeDrawer = () => {
    setIsDrawerActive(false);
  };

  const openCart = () => {
    setIsCartActive(true);
    setIsDrawerActive(false);
  };

  const closeCart = () => {
    setIsCartActive(false);
  };
  return (
    <MainContext.Provider
      value={{ isDrawerActive, openDrawer, closeDrawer, isCartActive, openCart, closeCart }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProviderContext };

MainProviderContext.propTypes = {
  children: PropTypes.node,
};
