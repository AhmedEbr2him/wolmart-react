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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isDocScroll]);

  return {
    stopScroll,
    startScroll,
  };
};
