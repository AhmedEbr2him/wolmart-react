/* eslint-disable react/prop-types */
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const LinkUnderline = ({ label, to }) => {
  return (
    <Link className={`link-underline`} to={to}>
      {label}
      <GoArrowRight width='40' />
    </Link>
  );
};
export default LinkUnderline;
