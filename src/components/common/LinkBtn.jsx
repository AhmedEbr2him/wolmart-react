/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LinkBtn = ({ label, classType, animate }) => {
  return (
    <Link role='button' className={`btn ${classType ? classType : ''} ${animate ? 'fade-in' : ''}`}>
      <span>{label}</span>
      <FaArrowRight />
    </Link>
  );
};
export default LinkBtn;
