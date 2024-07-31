/* eslint-disable react/prop-types */
import { IoIosArrowBack } from 'react-icons/io';

const CustomNextArrow = ({ onClick }) => {
  return (
    <button aria-label='previous' className='custom-arrow next-arrow' onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
};
export default CustomNextArrow;
