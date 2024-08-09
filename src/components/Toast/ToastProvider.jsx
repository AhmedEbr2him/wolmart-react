/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState({
    message: '',
    path: '',
    type: '',
    isLoading: false,
  });

  const handleToastMessage = (message, path, type, isLoading, timeout) => {
    setToastMessage({
      message,
      path,
      type,
      isLoading,
    });

    setTimeout(() => {
      setToastMessage({
        ...toastMessage,
        isLoading: false,
      });
    }, timeout);
  };

  return (
    <ToastContext.Provider value={{ toastMessage, handleToastMessage }}>
      {children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
