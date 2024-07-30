import Images from '../../assets/images/images';

const CategoryBanner = () => {
  return (
    <div className='category-banner-wrapper'>
      <div className='container'>
        <div className='category-banner first-banner'>
          <figure>
            <img
              src={Images.categoryBanner.categoryBanner_1}
              alt='Category Banner'
              width='610'
              height='160'
              loading='lazy'
              style={{ backgroundColor: ' #ecedec' }}
              className='object-cover'
            />
          </figure>
          <div className='category-banner-content'>
            <h5>
              Get up to <span>20% Off</span>
            </h5>
            <h3>sports outfits collection</h3>
            <p className='banner-price'>
              Starting at<span>&nbsp;$170.00</span>
            </p>
          </div>
        </div>
        <div className='category-banner second-banner'>
          <figure>
            <img
              src={Images.categoryBanner.categoryBanner_2}
              alt='Category Banner'
              width='610'
              height='160'
              loading='lazy'
              style={{ backgroundColor: '#636363' }}
              className='object-cover'
            />
          </figure>
          <div className='category-banner-content'>
            <h5>New Arrivals</h5>
            <h3>Accessories collection</h3>
            <p className='banner-price'>
              Only From<span>&nbsp;$90.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryBanner;
