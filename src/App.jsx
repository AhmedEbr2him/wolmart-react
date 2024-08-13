import { Routes, Route } from 'react-router-dom';
import { routesConstatns } from './constants/routesConstants';
import { Footer, Header, StickyFooter } from './components';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './context/MainContext';
import { Suspense, lazy } from 'react';
import Toast from './components/common/Toast';
import useToast from './hooks/useToast';

/* PAGES */
const lazyImport = path => lazy(() => import(`./pages/${path}/index`));

const routeConfig = [
  {
    path: routesConstatns.HOME,
    component: lazyImport('home'),
  },
  {
    path: routesConstatns.SHOP,
    component: lazyImport('shop'),
  },
  {
    path: routesConstatns.CART,
    component: lazyImport('cart'),
  },
  {
    path: routesConstatns.ABOUT_US,
    component: lazyImport('about'),
  },
  {
    path: routesConstatns.CONTACT_US,
    component: lazyImport('contact'),
  },
  {
    path: routesConstatns.WISHLIST,
    component: lazyImport('wishlist'),
  },
  {
    path: routesConstatns.CHECKOUT,
    component: lazyImport('checkout'),
  },
  {
    path: routesConstatns.AUTHENTICATION,
    component: lazyImport('auth'),
  },
];

/* COMPOENNTS */
const LazyMobileDrawer = lazy(() => import('./components/global/MobileDrawer/MobileDrawer'));
const LazyCartDrawer = lazy(() => import('./components/global/CartDrawer/CartDrawer'));
const LazyScrimOverlay = lazy(() => import('./components/common/ScrimOverlay'));
const LazyProductPopupDetalil = lazy(() => import('./components/common/ProductPopupDetail'));

const App = () => {
  const { isDrawerActive, isFilterActive, quickViewData } = useContext(MainContext);
  const { toastMessage } = useToast();
  const [isStickFooterVisible, setIsStickyFooterVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 876) {
        setIsStickyFooterVisible(false);
      } else {
        setIsStickyFooterVisible(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
    /* MAIN COMPONENTS */
    <div className={'app'}>
      <Suspense fallback={null}>
        <LazyMobileDrawer />
        <LazyCartDrawer />
        {/* SCRIM */}
        <LazyScrimOverlay />
      </Suspense>

      {!!isStickFooterVisible && <StickyFooter />}
      <Header />

      {/* MAIN PAGES */}
      <main className='main'>
        <Routes>
          {routeConfig.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div>...Loading</div>}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Routes>
      </main>

      {toastMessage.isLoading && (
        <Toast message={toastMessage.message} path={toastMessage.path} type={toastMessage.type} />
      )}
      <Suspense>
        <LazyProductPopupDetalil data={quickViewData} />
      </Suspense>
      <Footer />
    </div>
  );
};
export default App;
