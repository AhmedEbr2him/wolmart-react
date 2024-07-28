import { Routes, Route } from 'react-router-dom';
import { routesConstatns } from './constants/routesConstants';
// import { Home } from './pages';
import { CartDrawer, Footer, Header, MobileDrawer, StickyFooter } from './components';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';
import React, { Suspense, lazy } from 'react';

const LazyHome = lazy(() => import('./pages/home/index'));
const LazyMobileDrawer = lazy(() => import('./components/global/MobileDrawer/MobileDrawer'));
const LazyCartDrawer = lazy(() => import('./components/global/CartDrawer/CartDrawer'));

const App = () => {
  const { isDrawerActive } = useContext(MainContext);
  return (
    <div className={'app'} data-drawer_active={isDrawerActive}>
      <Suspense>
        <LazyMobileDrawer />
      </Suspense>
      <StickyFooter />
      <Suspense>
        <LazyCartDrawer />
      </Suspense>
      <Header />

      <main className='main'>
        <article>
          <Routes>
            <Route
              path={routesConstatns.HOME}
              element={
                <Suspense fallback={<div>...Loading</div>}>
                  <LazyHome />
                </Suspense>
              }
            />
          </Routes>
        </article>
      </main>
      <Footer />
    </div>
  );
};
export default App;
