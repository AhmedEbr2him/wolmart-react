import { useEffect, useState } from 'react';

export const useIsScroll = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleMobileMenuScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleMobileMenuScroll);

    return () => {
      window.removeEventListener('scroll', handleMobileMenuScroll);
    };
  }, [lastScrollTop]);

  return {
    isScroll,
  };
};
