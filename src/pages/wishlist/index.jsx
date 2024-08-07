import { BreadcrumbList, PageHeader, SocialList, Table } from '../../components';
import './style.css';

const Wishlist = () => {
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
            <Table wishlist={true} />

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
