/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

const CounterSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const [hasReached, setHasReached] = useState(false);

  const settings = {
    slidesToShow: 1,
    speed: 500,
    infinite: false,
    dots: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const counterList = [
    {
      end: 15,
      numValue: 'M',
      title: 'Products For Sale',
      paragraph: 'Diam maecenas ultricies mi eget mauris Nibh tellus molestie nunc non',
    },
    {
      end: 25,
      numValue: 'B',
      title: 'Community Earnings',
      paragraph: 'Diam maecenas ultricies mi eget mauris Nibh tellus molestie nunc non',
    },
    {
      end: 100,
      numValue: 'M',
      title: 'Growing Buyers',
      paragraph: 'Diam maecenas ultricies mi eget mauris Nibh tellus molestie nunc non',
    },
  ];

  useEffect(() => {
    const handleScrollToSectionCount = () => {
      const sectionHead = sectionRef?.current?.offsetTop + sectionRef?.current?.clientHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= sectionHead) {
        setHasReached(true);
      } else {
        setHasReached(false);
      }
    };
    window.addEventListener('scroll', handleScrollToSectionCount);
    return () => window.removeEventListener('scroll', handleScrollToSectionCount);
  }, []);

  return (
    <section className='section count-section' ref={sectionRef}>
      <div className='section-wrapper'>
        <Slider {...settings}>
          {counterList.map((counter, index) => (
            <div key={index} className='counter-text'>
              <CounterUp
                key={currentSlide === index ? `${currentSlide}-${index}` : index}
                end={counter.end}
                hasReached={hasReached}
                timer={counter.end <= 50 ? 100 : 250}
                steps={counter.end <= 50 ? 1 : 5}
              />
              <span>{counter.numValue}+</span>
              <h4 className='title'>{counter.title}</h4>
              <p>{counter.paragraph}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const CounterUp = ({ start = 0, end, timer = 50, hasReached, steps = 1 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(start);

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.min(ref.current + steps, end);

      if (result > end) return setState(end);

      setState(result);
      ref.current = result;
    }

    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;

    if (hasReached) {
      if (isMounted) {
        updateCounterState();
      }
    }
    return () => (isMounted = false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasReached, end, start]);

  return <span className='count-to'>{state}</span>;
};
export default CounterSection;
