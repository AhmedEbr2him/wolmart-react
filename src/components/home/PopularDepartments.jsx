import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const PopularDepartments = () => {
  const tabList = [
    { link: '#', label: 'new arrivals' },
    { link: '#', label: 'best selling' },
    { link: '#', label: 'most popular' },
    { link: '#', label: 'feature' },
  ];
  return (
    <section className='popular-departments'>
      <div className='container'>
        <div className='section-header'>
          <SectionTitle title='Popular Departments' />
          <div className='tab-nav'>
            <ul className='nav'>
              {tabList.map((item, index) => (
                <li key={index} className='nav-item'>
                  <Link to={item.link} className='nav-link'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularDepartments;
