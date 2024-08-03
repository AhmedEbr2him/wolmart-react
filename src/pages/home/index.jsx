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
  LinkBtn,
  Clients,
  Blog,
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
  const [homeProduct, setHomeProducts] = useState([]);

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
    const homeProducts = products.filter(product => product.category === 'home');
    setTopProducts(topProductsFilter);
    setPopularProduct(popularProducts);
    setFashionProducts(fashionProducts);
    setTechProducts(techProducts);
    setHomeProducts(homeProducts);
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
          white={'true'}
        />
      )}

      <div className='banner-fashion-wrapper'>
        <div className='container'>
          <div
            className='banner banner-fashion'
            style={{
              backgroundImage: `url(${Images.banners.Banner_fashion})`,
              backgroundColor: 'rgb(56, 56, 57)',
            }}
          >
            <div className='banner-price-info'>
              25
              <sup>%</sup>
              <sub>OFF</sub>
            </div>
            <div className='banner-info'>
              <h3 className='banner-title'>for today&apos;s fashion</h3>
              <p>
                Use code
                <span>black 1234</span>
                to get best offer.
              </p>
            </div>
            <LinkBtn className='btn btn-outline' label='shop now' classType='btn-outline' />
          </div>
        </div>
      </div>

      {products && (
        <ProductsListBanner
          sectionTitle='Home Garden & Kitchen'
          banner={Images.banners.Banenr_5}
          to='#'
          h5='Deals And Promotions '
          h3='Trending'
          span='House Utensil'
          products={homeProduct}
        />
      )}

      <Clients />

      <Blog />
    </article>
  );
};
export default Home;
