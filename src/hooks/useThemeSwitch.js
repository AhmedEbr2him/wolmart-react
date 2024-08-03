import { useEffect, useState } from 'react';

export const useThemeSwitch = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = sessionStorage.getItem('theme');
    return savedTheme === savedTheme
      ? 'dark'
      : window.matchMedia('(prefers-color-scheme:dark)').matches;
  });

  useEffect(() => {
    const HTML = document.documentElement;

    if (sessionStorage.getItem('theme')) {
      HTML.setAttribute('data-scheme', sessionStorage.getItem('theme'));
    } else {
      HTML.setAttribute('data-scheme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(prevTheme => !prevTheme);
    sessionStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return { changeTheme, isDark };
};
