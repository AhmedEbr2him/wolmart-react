import { Routes, Route } from 'react-router-dom';
import { routesConstatns } from './constants/routesConstants';
import { Home } from './pages';
import { CartDrawer, Header, MobileDrawer, StickyFooter } from './components';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';

const App = () => {
  const { isDrawerActive } = useContext(MainContext);
  return (
    <div className={`app ${isDrawerActive ? 'drawer-active' : ''}`}>
      <MobileDrawer />
      <StickyFooter />
      <CartDrawer />
      <Header />
      <main className='main'>
        <article>
          <Routes>
            <Route path={routesConstatns.HOME} element={<Home />} />
          </Routes>
        </article>
      </main>
    </div>
  );
};
export default App;
