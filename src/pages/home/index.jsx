import './style.css';
import {
  IntroSection,
  FeaturesSection,
  CategoryBanner,
  Deals,
  CategorySection,
  PopularDepartments,
} from '../../components';
const Home = () => {
  return (
    <article>
      <IntroSection />
      <FeaturesSection />
      <CategoryBanner />
      <Deals />
      <CategorySection />
      <PopularDepartments />
    </article>
  );
};
export default Home;
