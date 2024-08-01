import './style.css';
import {
  IntroSection,
  FeaturesSection,
  CategoryBanner,
  Deals,
  CategorySection,
  PopularDepartments,
  Banner,
  ClothingAndApparel,
} from '../../components';
import { useEffect, useState } from 'react';
import Images from '../../assets/images/images';
const Home = () => {
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

  return (
    <>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      {products && <Deals products={products} />}
      <CategorySection />
      {products && <PopularDepartments products={products} />}

      <div className='banner-wrapper'>
        <Banner
          image={Images.banners.Banenr_1}
          backgroundColor={'#3B4B48'}
          h5={'Natural Process'}
          h3={'Cosmetic Makeup Professional'}
          underline='true'
        />
        <Banner
          image={Images.banners.Banenr_2}
          backgroundColor={'#E5E5E5'}
          h5={'Trending Now'}
          h3={"Women's Lifestyle Collection"}
          underline='true'
        />
      </div>

      {products && <ClothingAndApparel products={products} />}
    </>
  );
};
export default Home;
