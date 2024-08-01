import './style.css';
import {
  IntroSection,
  FeaturesSection,
  CategoryBanner,
  Deals,
  CategorySection,
  PopularDepartments,
} from '../../components';
import { useEffect, useState } from 'react';
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
    <article>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      {products && <Deals products={products} />}
      <CategorySection />
      {products && <PopularDepartments products={products} />}
    </article>
  );
};
export default Home;
