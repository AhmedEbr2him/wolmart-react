import { useEffect, useState } from 'react';

export const useThemeSwitch = () => {
  const [isDark, setIsDark] = useState(
    () =>
      sessionStorage.getItem('theme') === 'light' ||
      window.matchMedia('(prefers-color-scheme: light)').matches
  );

  useEffect(() => {
    const HTML = document.documentElement;

    if (sessionStorage.getItem('theme')) {
      HTML.dataset.scheme = sessionStorage.getItem('theme');
    } else {
      HTML.dataset.scheme = isDark ? 'dark' : 'light';
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
    sessionStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  return { changeTheme, isDark };
};
