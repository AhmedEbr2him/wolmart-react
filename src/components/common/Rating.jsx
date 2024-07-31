/* eslint-disable react/prop-types */
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Rating = ({ rating, reviews }) => {
  const maxRating = 5;
  const fillStars = Math.round(rating);

  return (
    <div className='rating-container'>
      <div className='rating-list'>
        {Array.from({ length: maxRating }).map((_, index) => (
          <StarRating key={index} filled={index < fillStars} />
        ))}
        <span className='tooltip'>{rating}</span>
      </div>
      {reviews && (
        <Link to='#' className='rating-reviews'>
          <span>{`(${reviews.length} Reviews)`}</span>
        </Link>
      )}
    </div>
  );
};
const StarRating = ({ filled }) => {
  return (
    <span className='rating-item'>
      <GoStarFill style={{ color: filled ? 'var(--secondary-text-color)' : 'lightgray' }} />
    </span>
  );
};
export default Rating;
