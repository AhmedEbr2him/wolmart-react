import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const ScrimOverlay = () => {
  const { isDrawerActive, isCartActive, isFilterOpen, closeFilter, closeDrawer, closeCart } =
    useContext(MainContext);
  return (
    <div
      className='scrim-overlay'
      data-active={isDrawerActive || isCartActive || isFilterOpen}
      onClick={() => {
        closeDrawer();
        closeCart();
        closeFilter();
      }}
    ></div>
  );
};
export default ScrimOverlay;
