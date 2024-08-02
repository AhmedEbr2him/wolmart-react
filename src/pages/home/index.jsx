import './style.css';
import {
  IntroSection,
  FeaturesSection,
  CategoryBanner,
  Deals,
  CategorySection,
  PopularDepartments,
  Banner,
  ProductsListBanner,
} from '../../components';
import { useEffect, useState } from 'react';
import Images from '../../assets/images/images';

const Home = () => {
  const [dealProducts, setDealProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [popularProducts, setPopularProduct] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [techProducts, setTechProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setDealProducts(data);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const topProductsFilter = products.filter(product => product.rating >= 4.5);
    const popularProducts = products.filter(product => product.rating >= 4);
    const fashionProducts = products.filter(product => product.category === 'fashion');
    const techProducts = products.filter(product => product.category === 'tech');
    setTopProducts(topProductsFilter);
    setPopularProduct(popularProducts);
    setFashionProducts(fashionProducts);
    setTechProducts(techProducts);
  }, [products]);

  return (
    <article className='home'>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      {dealProducts && <Deals products={dealProducts} topProducts={topProducts} />}
      <CategorySection />
      {products && <PopularDepartments products={popularProducts} />}

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
      {products && (
        <ProductsListBanner
          sectionTitle='Clothing & Apparel'
          banner={Images.banners.Banenr_3}
          to='#'
          h5='Weekend Sale'
          h3='New Arrivals'
          span='collection'
          products={fashionProducts}
          style={'white'}
        />
      )}
      {products && (
        <ProductsListBanner
          sectionTitle='Consumer Electric'
          banner={Images.banners.Banenr_4}
          to='#'
          h5='new collection'
          h3='top Camera'
          span='mirrorless'
          products={techProducts}
          white={true}
        />
      )}
    </article>
  );
};
export default Home;
