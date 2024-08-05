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
/* BANNERS */
import categoryBanner_1 from './banners/category-banner-1.jpg';
import categoryBanner_2 from './banners/cateogry-banner-2.jpg';
import Banenr_1 from './banners/3-1.jpg';
import Banenr_2 from './banners/3-2.jpg';
import Banenr_3 from './banners/2.jpg';
import Banenr_4 from './banners/3.jpg';
import Banenr_5 from './banners/5.jpg';
import Banner_fashion from './banners/4.jpg';
import Banner_shop_1 from './banners/banner1.jpg';

/* CATEGORIES */
import category_1 from './categories/2-1.jpg';
import category_2 from './categories/2-2.jpg';
import category_3 from './categories/2-3.jpg';
import category_4 from './categories/2-4.jpg';
import category_5 from './categories/2-5.jpg';
import category_6 from './categories/2-6.jpg';
import shop_category_1 from './shopCategories/category-4.jpg';
import shop_category_2 from './shopCategories/category-5.jpg';
import shop_category_3 from './shopCategories/category-6.jpg';
import shop_category_4 from './shopCategories/category-7.jpg';
import shop_category_5 from './shopCategories/category-8.jpg';
import shop_category_6 from './shopCategories/category-9.jpg';
import shop_category_7 from './shopCategories/category-20.jpg';
import shop_category_8 from './shopCategories/category-21.jpg';
/* CLIENTS */
import client_1 from './clients/1.png';
import client_2 from './clients/2.png';
import client_3 from './clients/3.png';
import client_4 from './clients/4.png';
import client_5 from './clients/5.png';
import client_6 from './clients/6.png';
import client_7 from './clients/7.png';
import client_8 from './clients/8.png';
import client_9 from './clients/9.png';
import client_10 from './clients/10.png';
import client_11 from './clients/11.png';
import client_12 from './clients/12.png';

/* BRANDS */
import brand_1 from './brands/1.png';
import brand_2 from './brands/2.png';
import brand_3 from './brands/3.png';
import brand_4 from './brands/4.png';
import brand_5 from './brands/5.png';
import brand_6 from './brands/6.png';
import brand_7 from './brands/7.png';

/* ABOUT US  */
import about_banner_1 from './aboutus/1.jpg';
import about_banner_2 from './aboutus/2.jpg';
import about_banner_3 from './aboutus/3.jpg';

import award_1 from './aboutus/awards/1.png';
import award_2 from './aboutus/awards/2.png';
import award_3 from './aboutus/awards/3.png';
import award_4 from './aboutus/awards/4.png';

import member_1 from './aboutus/members/4.jpg';
import member_2 from './aboutus/members/5.jpg';
import member_3 from './aboutus/members/6.jpg';
import member_4 from './aboutus/members/7.jpg';

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

  banners: {
    categoryBanner_1,
    categoryBanner_2,
    Banenr_1,
    Banenr_2,
    Banenr_3,
    Banenr_4,
    Banenr_5,
    Banner_fashion,
    Banner_shop_1,
  },

  categories: {
    category_1,
    category_2,
    category_3,
    category_4,
    category_5,
    category_6,
    shop_category_1,
    shop_category_2,
    shop_category_3,
    shop_category_4,
    shop_category_5,
    shop_category_6,
    shop_category_7,
    shop_category_8,
  },

  clients: [
    client_1,
    client_2,
    client_3,
    client_4,
    client_5,
    client_6,
    client_7,
    client_8,
    client_9,
    client_10,
    client_11,
    client_12,
  ],
  brands: [brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7],

  about: {
    banner: { about_banner_1, about_banner_2, about_banner_3 },
    awards: { award_1, award_2, award_3, award_4 },
    members: { member_1, member_2, member_3, member_4 },
  },
};
export default Images;
