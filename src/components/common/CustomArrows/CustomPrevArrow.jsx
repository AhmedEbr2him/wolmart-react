import { IoIosArrowForward } from 'react-icons/io';

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button aria-label='previous' className='custom-arrow prev-arrow' onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
};
export default CustomPrevArrow;
