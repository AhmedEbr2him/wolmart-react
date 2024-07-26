import './style.css';
import { TfiClose } from 'react-icons/tfi';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MainContext } from '../../../context/MainContext';
import { Links } from '../../../constants/mockData.jsx';

const MobileDrawer = () => {
  const mainMenuList = ['Home', 'Blog', 'About us', 'Contact', 'FAQ', 'Pages'];
  const [activeTab, setActiveTab] = useState('main-menu');
  const { closeDrawer } = useContext(MainContext);

  return (
    <div className='mobile-drawer-wrapper'>
      <div className='scrim-overlay' onClick={() => closeDrawer()}></div>
      <button
        className='close-mobile-drawer'
        aria-label='close mobile drawer button'
        onClick={() => closeDrawer()}
      >
        <TfiClose size={24} />
      </button>

      <div className='mobile-menu-container'>
        <form action='#' className='input-wrapper'>
          <input
            type='text'
            name='search'
            autoComplete='off'
            placeholder='Search'
            className='form-control'
          />
          <button className='btn btn-search' type='submit' aria-label='submit search button'>
            <FiSearch size={20} />
          </button>
        </form>

        <div className='tabs'>
          <ul className='nav nav-tabs' role='tablist'>
            <Tab
              id='main-menu'
              activeTab={activeTab}
              label='Main Menu'
              setActiveTab={setActiveTab}
            />
            <Tab
              id='categories'
              activeTab={activeTab}
              label='Categories'
              setActiveTab={setActiveTab}
            />
          </ul>
        </div>

        <div className='tab-content'>
          <div className='tab-panel' id='main-menu' hidden={activeTab !== 'main-menu'}>
            <ul className='mobile-menu'>
              {mainMenuList.map((item, index) => (
                <li key={index} className='mobile-item'>
                  <Link to={'#'} role='link-item'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='tab-panel' id='categories' hidden={activeTab !== 'categories'}>
            <ul className='mobile-menu'>
              <MobileItems dropdownList={Links} />
              <li className='view-all-categories mobile-item'>
                <Link to='#' className='link-item'>
                  <span>VIEW ALL CATEGORIES</span>
                  <IoIosArrowForward size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ id, activeTab, setActiveTab, label }) => {
  return (
    <li className='nav-item'>
      <button
        id={id}
        className={`nav-btn ${activeTab === id ? 'active' : ''}`}
        role='navItem'
        onClick={() => setActiveTab(id)}
      >
        {label}
      </button>
    </li>
  );
};

const MobileItems = ({ list }) => {
  const [isDropdownMenuExp, setIsDropdownMenuExp] = useState(null);
  const [isMegaMenuExpaned, setIsMegaMenuExpaned] = useState(null);

  const toggleDropdownMenu = index => {
    setIsDropdownMenuExp(isDropdownMenuExp === index ? null : index);
    setIsMegaMenuExpaned(null);
  };
  const toggleMegaMenu = index => {
    setIsMegaMenuExpaned(isMegaMenuExpaned === index ? null : index);
  };

  return list?.map((item, index) => {
    return (
      <li className='mobile-item' key={index}>
        <Link role='link-item' to='#'>
          <p>
            {item.icon}
            <span>{item.link}</span>
          </p>
          <button className='btn' aria-label='arrow link' onClick={() => toggleDropdownMenu(index)}>
            {item.hasMenu && <IoIosArrowForward />}
          </button>
        </Link>

        {item.dropdownMenu && (
          <ul className='dropdown-menu' aria-expanded={isDropdownMenuExp === index}>
            {item.dropdownMenu &&
              item?.dropdownMenu.map((item, index) => (
                <li key={index} className='dropdown-item'>
                  <Link to={item.to}>
                    <p>{item.label}</p>
                    <button
                      className='btn'
                      aria-label='arrow link'
                      onClick={() => toggleMegaMenu(index)}
                    >
                      <IoIosArrowForward />
                    </button>
                  </Link>

                  <ul className='mega-menu' aria-expanded={isMegaMenuExpaned === index}>
                    {item.megaMenu &&
                      item.megaMenu.map((item, index) => (
                        <li key={index} className='megamenu-item'>
                          <Link to={item.to}>{item.label}</Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
          </ul>
        )}
      </li>
    );
  });
};
export default MobileDrawer;
