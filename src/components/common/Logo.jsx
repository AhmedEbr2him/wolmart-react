import { Link } from 'react-router-dom';
import { routesConstatns } from '../../constants/routesConstants';
import Images from '../../assets/images/images';

const Logo = () => {
  return (
    <Link to={routesConstatns.HOME} className='logo' aria-label='site logo'>
      <img
        src={Images.logo.lightLogo}
        className='light-logo'
        alt='site logo'
        width='130'
        height='28'
      />
      <img
        src={Images.logo.darkLogo}
        className='dark-logo'
        alt='site logo'
        width='130'
        height='28'
      />
    </Link>
  );
};
export default Logo;
