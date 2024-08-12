/* eslint-disable react/prop-types */
import { TfiClose } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { filterItems } from '../../constants/mockData';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { useStopDocScroll } from '../../hooks/useStopDocScroll';

const ShopSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState({
    allCategories: true,
    price: true,
    size: true,
    brand: true,
    color: true,
  });
  const { closeFilter, isFilterOpen } = useContext(MainContext);

  const toggleCollapsed = key => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const { startScroll, stopScroll } = useStopDocScroll();
  useEffect(() => {
    if (isFilterOpen) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [isFilterOpen, startScroll, stopScroll]);
  return (
    <aside className='sidebar shop-sidebar'>
      {isFilterOpen && (
        <button aria-label='Close' className='sidebar-close' onClick={closeFilter}>
          <TfiClose size={24} />
        </button>
      )}

      {/* SIDEBAR CONTENT */}
      <div className={`sidebar-content ${isFilterOpen ? 'active' : ''}`}>
        <div className='sidebar-wrapper'>
          <div className='filter-action'>
            <p>Filter: </p>
            <button aria-label='Clean all'>Clean All</button>
          </div>
          <Widget
            label='all categories'
            filterItems={filterItems.allCategories}
            isCollapsed={isCollapsed.allCategories}
            onClick={() => toggleCollapsed('allCategories')}
          />
          <Widget
            label='price'
            filterItems={filterItems.priceRanges}
            isCollapsed={isCollapsed.price}
            onClick={() => toggleCollapsed('price')}
          />
          <Widget
            label='size'
            filterItems={filterItems.sizeRange}
            isCollapsed={isCollapsed.size}
            onClick={() => toggleCollapsed('size')}
          />
          <Widget
            label='brand'
            filterItems={filterItems.brands}
            isCollapsed={isCollapsed.brand}
            onClick={() => toggleCollapsed('brand')}
          />
          <Widget
            label='color'
            filterItems={filterItems.colorOptions}
            isCollapsed={isCollapsed.color}
            onClick={() => toggleCollapsed('color')}
          />
        </div>
      </div>
    </aside>
  );
};
export default ShopSidebar;

const Widget = ({ filterItems, label, onClick, isCollapsed }) => {
  return (
    <div className='widget widget-collaspsible'>
      <h3 className={`widget-title ${isCollapsed ? 'collapsed' : ''}`} onClick={onClick}>
        <p>{label}</p>
        <button aria-label='Toggle' className='toggle-btn'></button>
      </h3>
      <ul className='widget-body filter-items'>
        {filterItems.map((item, index) => {
          const { label, value, to } = item;
          return (
            <li key={index} className='filter-item'>
              {value && (
                <label>
                  <input type='checkbox' name='checkbox' value={value} />
                </label>
              )}
              <Link to={to}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
