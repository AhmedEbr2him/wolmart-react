/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Toast = ({ message, path, type }) => {
  return (
    <div className='toast'>
      <div className='toast__message'>
        <p>
          {message}&nbsp;
          <Link to={path}>{type}</Link>
        </p>
      </div>
    </div>
  );
};
export default Toast;
