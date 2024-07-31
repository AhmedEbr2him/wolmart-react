import './style.css';
import {
  IntroSection,
  FeaturesSection,
  CategoryBanner,
  Deals,
  CategorySection,
} from '../../components';
const Home = () => {
  return (
    <article>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      <Deals />
      <CategorySection />
    </article>
  );
};
export default Home;
