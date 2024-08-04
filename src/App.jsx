import { Routes, Route } from 'react-router-dom';
import { routesConstatns } from './constants/routesConstants';
// import { Home } from './pages';
import { Footer, Header, StickyFooter } from './components';
import { useContext, useEffect } from 'react';
import { MainContext } from './context/MainContext';
import { Suspense, lazy } from 'react';
import Shop from './pages/shop';
import { Cart } from './pages';

const LazyHome = lazy(() => import('./pages/home/index'));
const LazyMobileDrawer = lazy(() => import('./components/global/MobileDrawer/MobileDrawer'));
const LazyCartDrawer = lazy(() => import('./components/global/CartDrawer/CartDrawer'));
const LazyScrimOverlay = lazy(() => import('./components/common/ScrimOverlay'));

const App = () => {
  const { isDrawerActive, isFilterActive } = useContext(MainContext);

  useEffect(() => {
    const handleBody = () => {
      if (isDrawerActive) {
        document.getElementById('root').setAttribute('data-drawer_active', true);
      } else {
        document.getElementById('root').removeAttribute('data-drawer_active');
      }
    };
    handleBody();
  }, [isDrawerActive, isFilterActive]);

  return (
    <div className={'app'}>
      <Suspense fallback={null}>
        <LazyMobileDrawer />
        <LazyCartDrawer />
        {/* SCRIM */}
        <LazyScrimOverlay />
      </Suspense>

      <StickyFooter />
      <Header />

      <main className='main'>
        <Routes>
          <Route
            path={routesConstatns.HOME}
            element={
              <Suspense fallback={<div>...Loading</div>}>
                <LazyHome />
              </Suspense>
            }
          />
          <Route path={routesConstatns.SHOP} element={<Shop />} />
          <Route path={routesConstatns.CART} element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
export default App;
