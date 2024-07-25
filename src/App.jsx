import { Routes, Route } from 'react-router-dom';
import { routesConstatns } from './constants/routesConstants';
import { Home } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <div className='app'>
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
