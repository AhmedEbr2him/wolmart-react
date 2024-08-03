/* eslint-disable react/prop-types */
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LinkBtn = ({ label, classType, to }) => {
  return (
    <Link role='button' to={to} className={`btn ${classType ? classType : ''}`}>
      <span>{label}</span>&nbsp;&nbsp;
      <FaArrowRight />
    </Link>
  );
};
export default LinkBtn;
