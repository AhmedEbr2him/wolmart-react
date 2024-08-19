import { useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
const ScrollToTop = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [svgScrollValue, setSvgScrollValue] = useState(0);
  const circumference = 2 * Math.PI * 34; // 2 * PI * r

  useEffect(() => {
    const handleScroll = () => {
      const pageScrollPosition =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setSvgScrollValue(pageScrollPosition);
    };

    const handleScrollApperance = () => {
      if (window.scrollY > 300) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollApperance);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollApperance);
    };
  }, []);

  return (
    <button
      aria-label='Scroll to top'
      title='Top'
      id='top'
      className={`scroll-to-top ${isScroll ? 'active' : ''}`}
      onClick={() => scrollTo(0, 0)}
    >
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 70 70'
        className='progress-indicator'
      >
        <circle
          id='progress-indicator'
          fill='transparent'
          stroke={'var(--main-text-color)'}
          strokeMiterlimit='10'
          cx='35'
          cy='35'
          r={34}
          style={{
            strokeDasharray: `${svgScrollValue * circumference}, ${400}`,
            strokeWidth: 3,
            strokeLinecap: 'round',
            color: '#fff',
          }}
        ></circle>
      </svg>
      <span className='progress-icon'>
        <IoMdArrowRoundUp size={16} />
      </span>
    </button>
  );
};
export default ScrollToTop;
