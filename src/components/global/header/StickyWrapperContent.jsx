/* eslint-disable react/prop-types */
import { FaList } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineDiscount } from 'react-icons/md';
import { mainMenuList, megaMenuList } from '../../../constants/mockData';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import Images from '../../../assets/images/images.js';
import { BsArrowRight } from 'react-icons/bs';
import { routesConstatns } from '../../../constants/routesConstants.js';
import { Links } from '../../../constants/mockData.jsx';
import { useState } from 'react';

const StickyWrapperContent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='sticky-content-wrapper'>
      <div className='header-bottom'>
        <div className='container'>
          <div className='inner-wrapper'>
            <div className='left-part'>
              <div
                role='menu'
                className={`dropdown category-dropdown has-border ${isActive ? 'active' : ''}`}
                onClick={() => setIsActive(!isActive)}
              >
                <Link
                  to={'#'}
                  className='category-toggle'
                  role='button'
                  aria-haspopup='true'
                  title='Browse Categories'
                >
                  <FaList size={18} />
                  <span>Browse Categories</span>
                  <IoIosArrowDown />
                </Link>

                {/* DROPDOWN BOX */}
                <div className='dropdown-box'>
                  <ul className='menu category-menu'>
                    <li className='list-item fashion'>
                      <Link to='#'>
                        <span>Fashion</span>
                        <IoIosArrowForward />
                      </Link>
                      <ul className='mega-menu-wrapper'>
                        <MegamenuItem item={megaMenuList.fashion} />

                        <li className='media-item'>
                          <div className='banner-fixed menu-banner'>
                            <figure>
                              <img
                                src={Images.banners.header_banner_1}
                                alt='Menu Banner'
                                width='235'
                                height='347'
                                loading='lazy'
                                className='object-cover'
                              />
                            </figure>
                            <div className='banner-content'>
                              <span className='banner-price-inof'>
                                Get up to <strong>20%Off</strong>
                              </span>
                              <h3 className='banner-title'>Hot sales</h3>
                              <Link to='' className='shop-btn'>
                                <span>shop now</span>
                                <BsArrowRight />
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>

                    <HomeListDropdown megaMenuList={megaMenuList.homeAndGarden} />
                    <ElectronicsListDropdown megaMenuList={megaMenuList.electronics} />
                    <FurnitureListDropdown megaMenuList={megaMenuList.furnaiture} />
                    <ListItem item={Links.healthAndBeauty} />
                    <ListItem item={Links.gifts} />
                    <ListItem item={Links.games} />
                    <ListItem item={Links.cooking} />
                    <ListItem item={Links.smartPhons} />
                    <ListItem item={Links.camera} />
                    <ListItem item={Links.accessories} />
                    <li className='list-item view-all'>
                      <Link to={routesConstatns.SHOP}>
                        <span>View All Categories</span>
                        <IoIosArrowForward />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* NAVBAR*/}
              <div className='main-nav'>
                <ul className='menu'>
                  {mainMenuList.map((link, index) => (
                    <li key={index}>
                      <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='right-part'>
              <Link to='#'>
                <MdOutlineDiscount size={20} />
                <span>Daily Deals</span>
              </Link>
              <Link to='#'>
                <GrLocation size={20} />
                <span>Track Order</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyWrapperContent;

const ListItem = ({ item }) => {
  return (
    <li className='list-item'>
      {item.icon}
      <Link to={item.link}>
        <span>{item.link}</span>
      </Link>
    </li>
  );
};
const MegamenuItem = ({ item }) => {
  return (
    <>
      {item?.map((item, index) => (
        <li key={index}>
          <h4>{item.label}</h4>

          <ul>
            {item.megaMenu.map((menu, index) => (
              <li key={index}>
                <Link to={menu.to}>{menu.label}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

const HomeListDropdown = ({ megaMenuList }) => {
  return (
    <li className='list-item specific-list home'>
      <Link to='#'>
        <span>Home & Garden</span>
        <IoIosArrowForward />
      </Link>
      <ul className='mega-menu-wrapper'>
        {megaMenuList.map((item, index) => (
          <li key={index}>
            <h4 className='menu-title'>{item.label}</h4>
            <ul>
              {item.megaMenu.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.to}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className='menu-title'>{item.label2}</h4>
            <ul>
              {item.megaMenu2.map((menu, index) => (
                <li key={index} to={menu.to}>
                  <Link to={menu.to}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className='media-item'>
          <div className='banner-fixed menu-banner'>
            <figure>
              <img
                src={Images.banners.header_banner_2}
                alt='Menu Banner'
                width='235'
                height='347'
                loading='lazy'
                className='object-cover'
              />
            </figure>
            <div className='banner-content'>
              <h4 className='banner-subtitle'>restromm</h4>
              <h3 className='banner-title'>Furniture Sale</h3>
              <div className='banner-price-info'>
                up to <span>25%off</span>
              </div>
              <Link to='' className='shop-btn'>
                <span>shop now</span>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};
const ElectronicsListDropdown = ({ megaMenuList }) => {
  return (
    <li className='list-item specific-list electronics'>
      <Link to='#'>
        <span>Electronics</span>
        <IoIosArrowForward />
      </Link>
      <ul className='mega-menu-wrapper'>
        {megaMenuList.map((item, index) => (
          <li key={index}>
            <h4 className='menu-title'>{item.label}</h4>
            <ul>
              {item.megaMenu.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.to}>{menu.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className='menu-title'>{item.label2}</h4>
            <ul>
              {item.megaMenu2.map((menu, index) => (
                <li key={index} to={menu.to}>
                  <Link to={menu.to}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li className='media-item'>
          <div className='banner-fixed menu-banner'>
            <figure>
              <img
                src={Images.banners.header_banner_3}
                alt='Menu Banner'
                width='235'
                height='347'
                loading='lazy'
                className='object-cover'
              />
            </figure>

            <div className='banner-content'>
              <h4 className='banner-subtitle'>Deals Of The Week</h4>
              <h3 className='banner-title'>Save On Smart EarPhone</h3>
              <div className='banner-price-info'>
                up to <span>20%off</span>
              </div>
              <Link to='' className='btn btn-outline'>
                <span>shop now</span>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};

const FurnitureListDropdown = ({ megaMenuList }) => {
  return (
    <li className='list-item specific-list furniture'>
      <Link to='#'>
        <span>Furniture</span>
        <IoIosArrowForward />
      </Link>
      <ul className='mega-menu-wrapper'>
        <li>
          {megaMenuList.map((menu, index) => (
            <div key={index}>
              <h4>{menu.label}</h4>

              <ul>
                {menu.megaMenu.map((item, index) => (
                  <li key={index}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>

        <li className='media-item'>
          <div className='banner-fixed menu-banner'>
            <figure>
              <img
                src={Images.banners.header_banner_4}
                alt='Menu Banner'
                width='235'
                height='347'
                loading='lazy'
                className='object-cover'
              />
            </figure>

            <div className='banner-content'>
              <h4 className='banner-subtitle'>New Arrivals</h4>
              <h3 className='banner-title'>Amazing Sofa</h3>
              <div className='banner-price-info'>
                Starting at <span> $125.00</span>
              </div>
            </div>
          </div>

          <div className='banner-fixed menu-banner'>
            <figure>
              <img
                src={Images.banners.header_banner_5}
                alt='Menu Banner'
                width='235'
                height='347'
                loading='lazy'
                className='object-cover'
              />
            </figure>

            <div className='banner-content'>
              <h4 className='banner-subtitle'>Best Seller</h4>
              <h3 className='banner-title'>Chair & Lamp</h3>
              <div className='banner-price-info'>
                From <span>$165.00 </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </li>
  );
};
