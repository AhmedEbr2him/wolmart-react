import { useEffect, useState } from 'react';

export const useStopDocScroll = () => {
  const [isDocScroll, setIsDocScroll] = useState(false);

  const stopScroll = () => {
    setIsDocScroll(true);
  };
  const startScroll = () => {
    setIsDocScroll(false);
  };

  useEffect(() => {
    if (isDocScroll) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [isDocScroll]);

  return {
    stopScroll,
    startScroll,
  };
};
