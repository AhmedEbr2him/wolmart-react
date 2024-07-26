import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItem = ({ item }) => {
  const { to, icon, link, hasMenu, dropdownMenu } = item;
  const [isDropdownMenuExp, setIsDropdownMenuExp] = useState(null);
  const [isMegaMenuExpaned, setIsMegaMenuExpaned] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownMenuExp(!isDropdownMenuExp);
    setIsMegaMenuExpaned(null);
  };

  const toggleMegaMenu = index => {
    setIsMegaMenuExpaned(isMegaMenuExpaned === index ? null : index);
  };
  return (
    <li className='list-item'>
      <Link to={to && to}>
        <p>
          {icon && icon}
          <span>{link && link}</span>
        </p>

        {hasMenu && (
          <button className='btn' aria-label='arrow link' onClick={toggleDropdown}>
            <IoIosArrowForward />
          </button>
        )}
      </Link>

      <DropdownMenu
        menu={dropdownMenu}
        expanded={isDropdownMenuExp}
        toggleFunc={toggleMegaMenu}
        megaExpanded={isMegaMenuExpaned}
      />
    </li>
  );
};

const DropdownMenu = ({ menu, expanded, toggleFunc, megaExpanded }) => {
  return (
    <ul className={`dropdown-menu ${expanded ? 'expaned' : ''}`}>
      {menu &&
        menu?.map((item, index) => (
          <li key={index} className='dropdown-item'>
            <Link to={item.to}>
              <p>{item.label}</p>
              <button className='btn' aria-label='arrow link' onClick={() => toggleFunc(index)}>
                <IoIosArrowForward />
              </button>
            </Link>

            {item.megaMenu && (
              <MegaMenu megaMenu={item.megaMenu} expanded={megaExpanded} index={index} />
            )}
          </li>
        ))}
    </ul>
  );
};

const MegaMenu = ({ megaMenu, expanded, index }) => {
  return (
    <ul className={`mega-menu ${expanded === index ? 'expaned' : ''}`}>
      {megaMenu &&
        megaMenu?.map((item, index) => (
          <li key={index} className='megamenu-item'>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
    </ul>
  );
};

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.string,
    icon: PropTypes.element,
    link: PropTypes.string,
    hasMenu: PropTypes.bool,
    dropdownMenu: PropTypes.arrayOf(
      PropTypes.shape({
        to: PropTypes.string,
        label: PropTypes.string,
        megaMenu: PropTypes.arrayOf(
          PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
};

DropdownMenu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      megaMenu: PropTypes.arrayOf(
        PropTypes.shape({
          to: PropTypes.string,
          label: PropTypes.string,
        })
      ),
    })
  ),
  expanded: PropTypes.bool,
  toggleFunc: PropTypes.func.isRequired,
  megaExpanded: PropTypes.number,
};

MegaMenu.propTypes = {
  megaMenu: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
  expanded: PropTypes.number,
};
