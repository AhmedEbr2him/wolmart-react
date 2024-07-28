import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const ScrimOverlay = () => {
  const { isDrawerActive, isCartActive, closeDrawer, closeCart } = useContext(MainContext);
  return (
    <div
      className='scrim-overlay'
      data-active={isDrawerActive || isCartActive}
      onClick={() => {
        closeDrawer();
        closeCart();
      }}
    ></div>
  );
};
export default ScrimOverlay;
