import { Link } from 'react-router-dom';
import { routesConstatns } from '../../constants/routesConstants';
import Images from '../../assets/images/images';

const Logo = () => {
  return (
    <Link to={routesConstatns.HOME} className='logo' aria-label='site logo'>
      <img
        src={Images.logo.lightLogo}
        alt='site logo'
        width='130'
        height='28'
        loading='lazy'
        className='light-logo'
      />
      <img
        src={Images.logo.darkLogo}
        alt='site logo'
        width='130'
        height='28'
        loading='lazy'
        className='dark-logo'
      />
    </Link>
  );
};
export default Logo;
