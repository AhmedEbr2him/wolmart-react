/* eslint-disable react/prop-types */
import SingleProduct from '../common/SingleProduct';
import Slider from 'react-slick';
import BestSelling from './BestSelling';
import CustomPrevArrow from '../common/CustomArrows/CustomPrevArrow';
import CustomNextArrow from '../common/CustomArrows/CustomNextArrow';

const Deals = ({ products, topProducts }) => {
  const settings = {
    dots: false,
    draggable: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className='section deals-wrapper'>
      <div className='container'>
        <div className='product-wrapper'>
          <h4 className='head-title'>Deals Hot of The Day</h4>
          <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />}>
            {products.deals_products &&
              products?.deals_products?.map((product, index) => (
                <SingleProduct
                  headTitle='Deals Hot of the Day'
                  data={product}
                  key={product.id}
                  index={index}
                />
              ))}
          </Slider>
        </div>

        <div className='product-wrapper'>
          <h4 className='head-title'>Top 20 Best Seller</h4>
          <BestSelling data={topProducts} />
        </div>
      </div>
    </section>
  );
};
export default Deals;
