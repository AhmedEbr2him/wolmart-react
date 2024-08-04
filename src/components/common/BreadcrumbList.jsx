import { NavLink, useLocation } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';
const BreadcrumbList = () => {
  return (
    <nav className='breadcrumb-list'>
      <BreadCrumb />
    </nav>
  );
};
const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');

  let url = '';
  const breadcrumbLinks = segments.map((segment, index) => {
    url += `${segment}`;
    const isLast = segments.length - 1 === index;

    return (
      <NavLink key={index} to={`/${url}`} className='breadcrumb'>
        <span>{segment === '' ? 'Home' : segment}</span>
        {!isLast && <IoChevronForward />}
      </NavLink>
    );
  });

  return breadcrumbLinks;
};
export default BreadcrumbList;
