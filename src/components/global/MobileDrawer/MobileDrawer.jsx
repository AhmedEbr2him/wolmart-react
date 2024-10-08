import './style.css';
import { TfiClose } from 'react-icons/tfi';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../../context/MainContext';
import { Links } from '../../../constants/mockData.jsx';
import ListItem from '../../ListItem.jsx';
import PropTypes from 'prop-types';
import { Theme } from '../../';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll.js';
import { mainMenuList } from '../../../constants/mockData.js';

const MobileDrawer = () => {
  const [activeTab, setActiveTab] = useState('main-menu');
  const { isDrawerActive, closeDrawer } = useContext(MainContext);
  const { startScroll, stopScroll } = useStopDocScroll();

  useEffect(() => {
    if (isDrawerActive) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isDrawerActive, startScroll, stopScroll]);

  return (
    <div className='mobile-drawer-wrapper'>
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
          <button className='small-btn btn-search' type='submit' aria-label='submit search button'>
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
              {mainMenuList.map(({ path, label }, index) => (
                <li key={index} className='list-item' onClick={closeDrawer}>
                  <Link to={path} role='link-item'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='tab-panel' id='categories' hidden={activeTab !== 'categories'}>
            <ul className='mobile-menu'>
              <ListItem item={Links.fashion} />
              <ListItem item={Links.homeAndGarden} />
              <ListItem item={Links.electronics} />
              <ListItem item={Links.furnaiture} />
              <ListItem item={Links.healthAndBeauty} />
              <ListItem item={Links.gifts} />
              <ListItem item={Links.games} />
              <ListItem item={Links.cooking} />
              <ListItem item={Links.smartPhons} />
              <ListItem item={Links.camera} />
              <ListItem item={Links.accessories} />

              <li className='view-all-categories list-item'>
                <Link to='#' className='link-item'>
                  <span>VIEW ALL CATEGORIES</span>
                  <IoIosArrowForward size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Theme />
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
        role='link'
        onClick={() => setActiveTab(id)}
      >
        {label}
      </button>
    </li>
  );
};

export default MobileDrawer;

Tab.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
