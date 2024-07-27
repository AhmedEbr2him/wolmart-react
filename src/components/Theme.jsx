import { useRef, useState } from 'react';
import { LuMoon, LuSunMedium } from 'react-icons/lu';
import { useThemeSwitch } from '../hooks/useThemeSwitch';

const Theme = () => {
  const { changeTheme, isDark } = useThemeSwitch();

  return (
    <div className='toggle-switch' onClick={() => changeTheme()}>
      <input type='checkbox' name='checkbox' id='checkbox' defaultChecked={isDark} />
      <button
        aria-label='theme button'
        style={{ transform: isDark ? 'translateX(20px)' : 'translateX(0px)' }}
      >
        <LuMoon className='dark-icon' />
        <LuSunMedium className='light-icon' />
      </button>
    </div>
  );
};
export default Theme;
