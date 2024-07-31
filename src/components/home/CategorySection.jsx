import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import Slider from 'react-slick';
import SectionTitle from '../common/SectionTitle';

const CategorySection = () => {
  const categoriesList = [
    {
      img: Images.categories.category_1,
      name: 'fashion',
    },
    {
      img: Images.categories.category_2,
      name: 'furniture',
    },
    {
      img: Images.categories.category_3,
      name: 'shoes',
    },
    {
      img: Images.categories.category_4,
      name: 'sports',
    },
    {
      img: Images.categories.category_5,
      name: 'games',
    },
    {
      img: Images.categories.category_6,
      name: 'computers',
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section className='category-section'>
      <div className='container'>
        <SectionTitle title='Top Categories Of The Month' />
        <div className='category-list'>
          <Slider {...settings}>
            {categoriesList.map((category, index) => (
              <div className='category-item' key={index}>
                <Link to='#' className='category-media'>
                  <img
                    src={category.img}
                    alt={category.name}
                    loading='lazy'
                    width='130'
                    height='130'
                    className='object-cover'
                  />
                </Link>

                <div className='category-content'>
                  <h4 className='category-name'>{category.name}</h4>
                  <Link to='#' className='shop-btn'>
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default CategorySection;
