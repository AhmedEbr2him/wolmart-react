import { useContext } from 'react';
import { BreadcrumbList, PageHeader, SocialList, Table } from '../../components';

import './style.css';
import { MainContext } from '../../context/MainContext';
import { Link } from 'react-router-dom';
import { routesConstatns } from '../../constants/routesConstants';
import { FiArrowLeft } from 'react-icons/fi';

const Wishlist = () => {
  const { storedProducts } = useContext(MainContext);
  const productsLength = storedProducts.products.favorite.length;

  return (
    <article className='wishlist'>
      <div className='wishlist-wrapper'>
        <div className='container'>
          <BreadcrumbList />
        </div>
        <PageHeader pageTitle='Wishlist' />

        <div className='page-content'>
          <div className='container'>
            {/* TABLE */}
            <p className='table-title'>My Wishlist</p>
            {productsLength === 0 && (
              <>
                <p className='empty-table-message'>Wishlist Is Empty !</p>
                <Link to={routesConstatns.SHOP} className='btn btn-dark continue'>
                  <FiArrowLeft style={{ marginInlineEnd: '0.5rem', verticalAlign: 'middle' }} />
                  Continue Shopping
                </Link>
              </>
            )}

            {productsLength > 0 && (
              <Table wishlist={true} data={storedProducts.products.favorite} />
            )}
            <div className='share-links'>
              <p>share on:</p>
              <SocialList />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default Wishlist;
