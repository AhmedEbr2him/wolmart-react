import './style.css';
import { IntroSection, FeaturesSection, CategoryBanner, Deals } from '../../components';
const Home = () => {
  return (
    <article>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      <Deals />
    </article>
  );
};
export default Home;
