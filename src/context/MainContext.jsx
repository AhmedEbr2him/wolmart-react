import { createContext, useState } from 'react';

const MainContext = createContext(null);

const MainProviderContext = ({ children }) => {
  const [isDrawerActive, setIsDrawerActive] = useState(null);

  const openDrawer = () => {
    setIsDrawerActive(true);
  };
  const closeDrawer = () => {
    setIsDrawerActive(false);
  };
  return (
    <MainContext.Provider value={{ isDrawerActive, openDrawer, closeDrawer }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProviderContext };
