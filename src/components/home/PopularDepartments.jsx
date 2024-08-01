/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Product from '../common/Product';

const PopularDepartments = ({ products }) => {
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

        <div className='tab-content'>
          <div className='tab-pane'>
            <div className='products-wrapper'>
              {products?.new_arrivals?.map((product, index) => (
                <Product key={product.id} index={index} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PopularDepartments;
