import './style.css';
import { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';
import Images from '../../assets/images/images';

const LazyIntroSection = lazy(() => import('../../components/home/IntroSection'));
const LazyFeaturesSection = lazy(() => import('../../components/home/FeaturesSection'));
const LazyCategoryBanner = lazy(() => import('../../components/home/CategoryBanner'));
const LazyDeals = lazy(() => import('../../components/home/Deals'));
const LazyCategorySection = lazy(() => import('../../components/home/CategorySection'));
const LazyPopularDepartments = lazy(() => import('../../components/home/PopularDepartments'));
const LazyBanner = lazy(() => import('../../components/common/Banner'));
const LazyProductsListBanner = lazy(() => import('../../components/home/ProductsListBanner'));
const LazyLinkBtn = lazy(() => import('../../components/common/LinkBtn'));
const LazyClients = lazy(() => import('../../components/home/Clients'));
const LazyBlog = lazy(() => import('../../components/home/Blog'));
const LazyRecentViews = lazy(() => import('../../components/home/RecentViews'));

const Home = () => {
  const [dealProducts, setDealProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [popularProducts, setPopularProduct] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);
  const [techProducts, setTechProducts] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState({
    intro: false,
    featrues: false,
    categoryBanner: false,
    deals: false,
    categorySection: false,
    popularDepartments: false,
    productListBanner: false,
    client: false,
    blog: false,
    recentViews: false,
  });

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

  /* CREATE LAZY LOAD RESOURCES */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const key = target.getAttribute('[data-lazy-trigger]');
          if (key) {
            setIsLoaded(prevState => ({ ...prevState, [key]: true }));
            observer.unobserve(target);
          }
        }
      },
      { threshold: 0 }
    );

    const targets = document.querySelectorAll('[data-lazy-trigger]');
    targets.forEach(target => {
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article className='home'>
      <Suspense>
        <LazyIntroSection />
      </Suspense>

      <Suspense>
        <LazyFeaturesSection />
      </Suspense>

      <Suspense>
        <LazyCategoryBanner />
      </Suspense>

      <Suspense>
        <LazyDeals products={dealProducts} topProducts={topProducts} />
      </Suspense>

      <Suspense>
        <LazyCategorySection />
      </Suspense>

      <Suspense>
        <LazyPopularDepartments products={popularProducts} />
      </Suspense>

      <Suspense>
        <div className='banner-wrapper'>
          <Suspense>
            <div className='container'>
              <LazyBanner
                image={Images.banners.Banenr_1}
                backgroundColor={'#3B4B48'}
                h5={'Natural Process'}
                h3={'Cosmetic Makeup Professional'}
                underline='true'
              />
              <LazyBanner
                image={Images.banners.Banenr_2}
                backgroundColor={'#E5E5E5'}
                h5={'Trending Now'}
                h3={"Women's Lifestyle Collection"}
                underline='true'
              />
            </div>
          </Suspense>
        </div>
        <LazyProductsListBanner
          sectionTitle='Clothing & Apparel'
          banner={Images.banners.Banenr_3}
          to='#'
          h5='Weekend Sale'
          h3='New Arrivals'
          span='collection'
          products={fashionProducts}
          style={'white'}
        />
      </Suspense>

      <Suspense>
        <LazyProductsListBanner
          sectionTitle='Consumer Electric'
          banner={Images.banners.Banenr_4}
          to='#'
          h5='new collection'
          h3='top Camera'
          span='mirrorless'
          products={techProducts}
          white={'true'}
        />
      </Suspense>

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
              <div className='info-wrapper'>
                <h3 className='banner-title'>for today&apos;s fashion</h3>
                <p>
                  Use code
                  <span>black 1234</span>
                  to get best offer.
                </p>
              </div>
              <LazyLinkBtn className='btn btn-outline' label='shop now' classType='btn-outline' />
            </div>
          </div>
        </div>
      </div>

      <Suspense>
        <LazyProductsListBanner
          sectionTitle='Consumer Electric'
          banner={Images.banners.Banenr_5}
          to='#'
          h5='new collection'
          h3='top Camera'
          span='mirrorless'
          products={homeProducts}
          white={'true'}
        />
      </Suspense>

      <Suspense>
        <LazyClients />
      </Suspense>

      <Suspense>
        <LazyBlog />
      </Suspense>

      <Suspense>
        <LazyRecentViews products={homeProducts} />
      </Suspense>
    </article>
  );
};
export default Home;
