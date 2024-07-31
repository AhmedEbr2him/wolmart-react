import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import Slider from 'react-slick';
import BestSelling from './BestSelling';
import CustomPrevArrow from '../common/CustomArrows/CustomPrevArrow';
import CustomNextArrow from '../common/CustomArrows/CustomNextArrow';

const Deals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

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
    <div className='deals-wrapper'>
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
          <BestSelling data={products.best_selling} />
        </div>
      </div>
    </div>
  );
};
export default Deals;
