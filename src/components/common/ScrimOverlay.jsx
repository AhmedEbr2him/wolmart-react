import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const ScrimOverlay = () => {
  const {
    isDrawerActive,
    isCartActive,
    isFilterOpen,
    closeFilter,
    closeDrawer,
    closeCart,
    closeQuickView,
    isQuickViewActive,
  } = useContext(MainContext);
  return (
    <div
      className='scrim-overlay'
      data-active={isDrawerActive || isCartActive || isFilterOpen || isQuickViewActive}
      onClick={() => {
        closeDrawer();
        closeCart();
        closeFilter();
        closeQuickView();
      }}
    ></div>
  );
};
export default ScrimOverlay;
