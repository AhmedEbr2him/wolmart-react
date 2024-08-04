/* eslint-disable react/prop-types */
import { lazy, Suspense, useContext, useEffect, useRef, useState } from 'react';
import ShopSidebar from './ShopSidebar';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { IoList } from 'react-icons/io5';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import SkeletonCard from '../common/SkeletonCard';
const LazyProduct = lazy(() => import('../common/Product'));
import { selectedList } from '../../constants/mockData';
import { MainContext } from '../../context/MainContext';
import { useIsScroll } from '../../hooks/useIsScroll';

const ShopContent = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const indexOfLastProduct = productsPerPage + currentPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalProductsPages = Math.ceil(allProducts.length / productsPerPage);
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null);
  const { isScroll } = useIsScroll();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      sectionRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  };
  const handleNextPage = () => {
    if (currentPage < Math.ceil(totalProductsPages)) {
      setCurrentPage(currentPage + 1);
      sectionRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  };
  const handlePageNumber = pageNum => {
    if (pageNum) {
      setCurrentPage(pageNum);
      sectionRef.current.scrollIntoView({ block: 'start', inline: 'nearest' });
    }
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch('/data.json');
        if (response.ok) {
          const data = await response.json();
          setAllProducts(data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

  // Show skeleton loader for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsLoading(true);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <section className='section shop-content' ref={sectionRef}>
      <ShopSidebar />
      <div className='main-content'>
        <div className={`filter-content-wrapper ${isScroll ? '' : 'fixed'}`}>
          <Navigation />
        </div>

        {/* PRODUCTS */}
        <div className='products-wrapper'>
          <ProductsList isLoading={isLoading} currentProducts={currentProducts} />
        </div>

        {/* PAGINATION */}
        <div className='toolbox toolbox-pagination'>
          <p className='showing-info'>
            Showing
            <span>
              {indexOfFirstProduct} - {indexOfLastProduct} of {allProducts.length}
            </span>
            Products
          </p>

          <div className='pagination-list'>
            <button aria-label='Previous page' className='btn prev-btn' onClick={handlePrevPage}>
              <FaArrowLeft />
              <span>Prev</span>
            </button>
            {/* PAGINATION ITEMS */}
            <Pagination
              totalProductsPages={totalProductsPages}
              currentPage={currentPage}
              handlePageNumber={handlePageNumber}
            />
            <button aria-label='Next page' className='btn next-btn' onClick={handleNextPage}>
              <span>Next</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
/* NAVIGATION */
const Navigation = () => {
  const { openFilter } = useContext(MainContext);

  return (
    <nav className='toolbox'>
      <div className='toolbox-left'>
        <button aria-label='filter button' className='btn filter-btn' onClick={openFilter}>
          <IoList />
          <span>filter</span>
        </button>

        <div className='toolbox-list'>
          <div className='toolbox-item'>
            <label htmlFor='sort'>sort by:</label>
            <select name='orderby' id='sort' className='form-control orderby-list'>
              {selectedList.orederByList.map((item, index) => (
                <option key={index} defaultValue={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>

      <div className='toolbox-right'>
        <div className='toolbox-item'>
          <select name='count' className='form-control count-list'>
            {selectedList.countList.map((item, index) => (
              <option key={index} defaultValue={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        <div className='toolbox-item btn-group'>
          <button className='icon-mod-grid btn-layout'>
            <BsFillGrid3X3GapFill />
          </button>
          <button className='icon-mod-list btn-layout'>
            <FaThList />
          </button>
        </div>
      </div>
    </nav>
  );
};

/* PRODUCTS LIST */
const ProductsList = ({ isLoading, currentProducts }) => {
  return (
    <div className='products-list'>
      {isLoading ? (
        <>
          {currentProducts?.map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </>
      ) : (
        <>
          {currentProducts?.map((product, index) => (
            <Suspense key={index} fallback={<SkeletonCard />}>
              <LazyProduct data={product} />
            </Suspense>
          ))}
        </>
      )}
    </div>
  );
};

/* PAGINATION */
const Pagination = ({ totalProductsPages, currentPage, handlePageNumber }) => {
  const pagination = [];
  const maxPagesToShow = 3;

  // Add the first page
  pagination.push(
    <li
      key={1}
      className={`pagination-item ${currentPage === 1 ? 'active' : ''}`}
      onClick={() => handlePageNumber(1)}
    >
      <button aria-label='Pagination'>1</button>
    </li>
  );

  // Determine the range of pages to show in the middle
  let startPage = Math.max(currentPage - 1, 2);
  let endPage = Math.min(currentPage + 1, totalProductsPages - 1);

  // Adjust if the start or end page is too close to the boundaries
  if (currentPage === 1) {
    endPage = Math.min(maxPagesToShow, totalProductsPages - 1);
  } else if (currentPage === totalProductsPages) {
    startPage = Math.max(totalProductsPages - 2, 2);
  }

  // Add the middle pages
  if (startPage > 2) {
    pagination.push(<li key='start-ellipsis'>...</li>);
  }

  for (let i = startPage; i <= endPage; i++) {
    pagination.push(
      <li
        key={i}
        className={`pagination-item ${currentPage === i ? 'active' : ''}`}
        onClick={() => handlePageNumber(i)}
      >
        <button aria-label='Pagination'>{i}</button>
      </li>
    );
  }
  if (endPage < totalProductsPages - 1) {
    pagination.push(<li key='end-ellipsis'>...</li>);
  }

  // Add the last page
  if (totalProductsPages > 1) {
    pagination.push(
      <li
        key={totalProductsPages}
        className={`pagination-item ${currentPage === totalProductsPages ? 'active' : ''}`}
        onClick={() => handlePageNumber(totalProductsPages)}
      >
        <button aria-label='Pagination'>{totalProductsPages}</button>
      </li>
    );
  }
  return <ul className='pagination'>{pagination}</ul>;
};

export default ShopContent;
