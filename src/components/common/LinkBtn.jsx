import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LinkBtn = ({ label, classType, animate, translate }) => {
  return (
    <Link
      role='button'
      className={`btn ${classType ? classType : ''} ${animate ? 'fade-in' : ''} ${
        translate ? 'right-translate' : ''
      }`}
    >
      <span>{label}</span>
      <FaArrowRight />
    </Link>
  );
};
export default LinkBtn;
