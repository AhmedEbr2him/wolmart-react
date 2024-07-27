import { createContext, useState } from 'react';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);
  const [isCartActive, setIsCartActive] = useState(null);

  const openDrawer = () => {
    setIsDrawerActive(true);
  };
  const closeDrawer = () => {
    setIsDrawerActive(false);
  };
  const handleCartStatus = () => {
    setIsCartActive(!isCartActive);
  };
  return (
    <MainContext.Provider
      value={{ isDrawerActive, openDrawer, closeDrawer, isCartActive, handleCartStatus }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProviderContext };
