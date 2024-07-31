import { useEffect, useState } from 'react';
import SingleProduct from '../common/SingleProduct';
import Slider from 'react-slick';

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
        <div className='single-product-wrapper'>
          <Slider {...settings}>
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
      </div>
    </div>
  );
};
export default Deals;
