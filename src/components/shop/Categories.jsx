import { Link } from 'react-router-dom';
import Images from '../../assets/images/images';
import Slider from 'react-slick';

const Categories = () => {
  const categoryList = [
    {
      label: 'sports',
      img: Images.categories.shop_category_1,
    },
    {
      label: 'babies',
      img: Images.categories.shop_category_2,
    },
    {
      label: 'sneakers',
      img: Images.categories.shop_category_3,
    },
    {
      label: 'cameras',
      img: Images.categories.shop_category_4,
    },
    {
      label: 'games',
      img: Images.categories.shop_category_5,
    },
    {
      label: 'kitchen',
      img: Images.categories.shop_category_6,
    },
    {
      label: 'watches',
      img: Images.categories.shop_category_7,
    },
    {
      label: 'clothes',
      img: Images.categories.shop_category_8,
    },
  ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,

    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <section className='shop-default-category'>
      <Slider {...settings}>
        {categoryList.map((category, index) => (
          <div key={index} className='category'>
            <figure className='category-media'>
              <Link to='#'>
                <img
                  src={category.img}
                  alt={category.label}
                  width='190'
                  height='190'
                  className='object-cover'
                />
              </Link>
            </figure>
            <div className='category-content'>
              <h4 className='category-name'>
                <Link to='#'>{category.label}</Link>
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Categories;
