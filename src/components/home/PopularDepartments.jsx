/* eslint-disable react/prop-types */
import SectionTitle from '../common/SectionTitle';
import Product from '../common/Product';
import { useEffect, useState } from 'react';

const PopularDepartments = ({ products }) => {
  const tabList = [
    { link: '#', id: 'tab-1', label: 'new arrivals' },
    { link: '#', id: 'tab-2', label: 'best selling' },
    { link: '#', id: 'tab-3', label: 'most popular' },
    { link: '#', id: 'tab-4', label: 'feature' },
  ];
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    const newArrivalsFilter = products?.filter(product => product?.reviews?.length <= 2);
    const bestSellingFilter = products?.filter(product => product?.rating >= 4.5);
    setNewArrivals(newArrivalsFilter);
    setBestSelling(bestSellingFilter);
  }, [products]);

  const sortMostPopular = products?.slice().sort((a, b) => b.rating - a.rating);
  const sortFeatured = products?.slice().sort((a, b) => b.reviews?.length - a.reviews?.length);
  const [activeTab, setActiveTab] = useState('tab-1');

  // slice / concat / array from / [... for main array] => creates a shallow copy of the array before sorting to avoid unexpected behavior when  rendering different tabs based on sorted data.
  // should create a shallow copy of the array before sorting. This way, each sort operation works on a separate array instance
  return (
    <section className='section popular-departments' data-lazy-trigger>
      <div className='container'>
        <div className='section-header'>
          <SectionTitle title='Popular Departments' />
          <div className='tab-nav'>
            <ul className='nav'>
              {tabList.map((item, index) => (
                <li
                  key={`${index}-${item.name}`}
                  className={`nav-item ${activeTab === item.id ? 'active-tab' : ''}`}
                >
                  <button
                    aria-label={item.label}
                    className='nav-link'
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {activeTab === 'tab-1' && <TabContent products={newArrivals} tabId='new_arrivals' />}

        {activeTab === 'tab-2' && <TabContent products={bestSelling} tabId='best_seller' />}

        {activeTab === 'tab-3' && <TabContent products={sortMostPopular} tabId='most_popular' />}

        {activeTab === 'tab-4' && <TabContent products={sortFeatured} tabId='featured' />}
      </div>
    </section>
  );
};
const TabContent = ({ products, tabId }) => {
  return (
    <div className='tab-content' id={tabId}>
      <div className='tab-pane'>
        <div className='products-wrapper'>
          {products?.map((product, index) => (
            <Product key={index} index={index} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PopularDepartments;
