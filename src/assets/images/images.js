import en from './flags/eng.png';
import fr from './flags/fra.png';
import lightLogo from './light-logo.png';
import darkLogo from './dark-logo.png';
import cartProductOne from './products/cart-products/product-1.jpg';
import cartProductTwo from './products/cart-products/product-2.jpg';
import payment from './payment.png';
/* INTRO SECTION */
import banner_1 from './slides/slide-1.jpg';
import banner_2 from './slides/slide-2.jpg';
import banner_3 from './slides/slide-3.jpg';
import banner_dark_1 from './slides/slide-dark-1.jpg';
import banner_dark_2 from './slides/slide-dark-2.jpg';
import banner_dark_3 from './slides/slide-dark-3.jpg';
import skate from './slides/skate.png';
import shoe from './slides/shoes.png';
import climbing from './slides/men.png';
/* CATEGORY BANNER SECTION */
import categoryBanner_1 from './banners/category-banner-1.jpg';
import categoryBanner_2 from './banners/cateogry-banner-2.jpg';

const Images = {
  flags: { en, fr },
  logo: { lightLogo, darkLogo },
  payment: { payment },
  products: {
    cartProducts: { cartProductOne, cartProductTwo },
  },

  introSection: {
    banner_1,
    banner_2,
    banner_3,
    banner_dark_1,
    banner_dark_2,
    banner_dark_3,
    skate,
    shoe,
    climbing,
  },

  categoryBanner: {
    categoryBanner_1,
    categoryBanner_2,
  },
};

export default Images;
