/* eslint-disable react/prop-types */
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF, FaPinterestP, FaWhatsapp } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { SlSocialInstagram } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const SocialList = ({ product }) => {
  const socialLinks = [
    { label: 'facebook', link: '#', icon: <FaFacebookF /> },
    { label: 'X', link: '#', icon: <BsTwitterX /> },
    { label: 'Pinterest', link: '#', icon: <FaPinterestP /> },
    { label: "What's app", link: '#', icon: <FaWhatsapp /> },
    { label: 'Inestagram', link: '#', icon: <SlSocialInstagram /> },
  ];

  return (
    <div className='social-links-wrapper'>
      <div className='social-links'>
        {socialLinks.map((link, index) => (
          <Link key={index} to={link.link} className='btn'>
            {link.icon}
          </Link>
        ))}
      </div>
      {product && (
        <div className='product-links-wrapper'>
          <button aria-label='favorite' className='favorite-btn'>
            <IoMdHeartEmpty />
            <span className='tooltip'>Add to Favorite</span>
          </button>
          <button aria-label='compare' className='compare-btn'>
            <LiaBalanceScaleSolid />
            <span className='tooltip'>Add to Comparison</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SocialList;
