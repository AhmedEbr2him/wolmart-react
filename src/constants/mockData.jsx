import { PiTShirtLight } from 'react-icons/pi';
import { TfiHome } from 'react-icons/tfi';
import { ImDisplay } from 'react-icons/im';
import { PiArmchairLight } from 'react-icons/pi';
import { FiHeart } from 'react-icons/fi';
import { ImGift } from 'react-icons/im';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiBowlNoodles } from 'react-icons/ci';
import { SlScreenSmartphone } from 'react-icons/sl';
import { MdOutlineCameraEnhance } from 'react-icons/md';
import { BsGem } from 'react-icons/bs';

export const Links = {
  fashion: {
    link: 'Fashion',
    to: '#',
    icon: <PiTShirtLight size={20} />,
    hasMenu: true,
    dropdownMenu: [
      {
        label: 'Women',
        megaMenu: [
          {
            to: 'new_arrival',
            label: 'New Arrivals',
          },

          {
            to: 'best_sellers',
            label: 'Best Sellers',
          },
          {
            to: 'trending',
            label: 'Trending',
          },
          {
            to: 'clothing',
            label: 'Clothing',
          },
          {
            to: 'shoes',
            label: 'Shoes',
          },
          {
            to: 'bags',
            label: 'Bags',
          },
          {
            to: 'accessories',
            label: 'Accessories',
          },
          {
            to: 'jewelry_and_watches',
            label: 'Jewelry & Watches',
          },
        ],
      },
      {
        label: 'Men',
        megaMenu: [
          {
            to: 'new_arrival',
            label: 'New Arrivals',
          },

          {
            to: 'best_sellers',
            label: 'Best Sellers',
          },
          {
            to: 'trending',
            label: 'Trending',
          },
          {
            to: 'clothing',
            label: 'Clothing',
          },
          {
            to: 'shoes',
            label: 'Shoes',
          },
          {
            to: 'bags',
            label: 'Bags',
          },
          {
            to: 'accessories',
            label: 'Accessories',
          },
          {
            to: 'jewelry_and_watches',
            label: 'Jewelry & Watches',
          },
        ],
      },
    ],
  },
  homeAndGarden: {
    link: 'Home & Garden',
    hasMenu: true,
    icon: <TfiHome size={20} />,
    dropdownMenu: [
      {
        label: 'Bedroom',
        megaMenu: [
          {
            to: '#',
            label: 'Beds, Frames & Bases',
          },

          {
            to: '#',
            label: 'Dressers',
          },

          {
            to: '#',
            label: 'Nightstands',
          },

          {
            to: '#',
            label: 'Kids Beds & Headboards',
          },

          {
            to: '#',
            label: 'Armoires',
          },

          {
            to: '#',
            label: 'Bags',
          },
        ],
      },
      {
        label: 'Living Room',
        megaMenu: [
          {
            to: '#',
            label: 'Coffee Tables',
          },

          {
            to: '#',
            label: 'Chairs',
          },

          {
            to: '#',
            label: 'Tables',
          },

          {
            to: '#',
            label: 'Futons & Sofa Beds',
          },

          {
            to: '#',
            label: 'Cabinets & Chests',
          },
        ],
      },
      {
        label: 'Office',
        megaMenu: [
          {
            to: '#',
            label: 'Office Chairs',
          },

          {
            to: '#',
            label: 'Desks',
          },

          {
            to: '#',
            label: 'Bookcases',
          },

          {
            to: '#',
            label: 'File Cabinets',
          },
          {
            to: '#',
            label: 'Breakroom Tables',
          },
        ],
      },
      {
        label: 'Kitchen & Dining',
        megaMenu: [
          {
            to: '#',
            label: 'Dining Sets',
          },

          {
            to: '#',
            label: 'Kitchen Storage Cabinets',
          },

          {
            to: '#',
            label: 'Bakers Racks',
          },

          {
            to: '#',
            label: 'Dining Chairs',
          },

          {
            to: '#',
            label: 'Dining Room Tables',
          },

          {
            to: '#',
            label: 'Bar Stools',
          },
        ],
      },
    ],
  },
  electronics: {
    link: 'Electronics',
    icon: <ImDisplay size={20} />,
    hasMenu: true,

    dropdownMenu: [
      {
        label: 'Laptops & Computers',
        megaMenu: [
          {
            to: '#',
            label: 'Desktop Computers',
          },

          {
            to: '#',
            label: 'Monitors',
          },

          {
            to: '#',
            label: 'Laptops',
          },

          {
            to: '#',
            label: 'Hard Drives & Storage',
          },

          {
            to: '#',
            label: 'Computer Accessories',
          },
        ],
      },
      {
        label: 'TV & Video',
        megaMenu: [
          {
            to: '#',
            label: 'TVs',
          },

          {
            to: '#',
            label: 'Home Audio Speakers',
          },

          {
            to: '#',
            label: 'Projectors',
          },

          {
            to: '#',
            label: 'Media Streaming Devices',
          },
        ],
      },
      {
        label: 'Digital Cameras',
        megaMenu: [
          {
            to: '#',
            label: 'Digital SLR Cameras',
          },

          {
            to: '#',
            label: 'Sports & Action Cameras',
          },

          {
            to: '#',
            label: 'Camera Lenses',
          },

          {
            to: '#',
            label: 'Photo Printer',
          },
          {
            to: '#',
            label: 'Digital Memory Cards',
          },
        ],
      },
      {
        label: 'Cell Phones',
        megaMenu: [
          {
            to: '#',
            label: 'Carrier Phones',
          },

          {
            to: '#',
            label: 'Unlocked Phones',
          },

          {
            to: '#',
            label: 'Phone & Cellphone Cases',
          },

          {
            to: '#',
            label: 'Cellphone Chargers',
          },
        ],
      },
    ],
  },
  furnaiture: {
    link: 'Furniture',
    icon: <PiArmchairLight size={20} />,
    hasMenu: true,

    dropdownMenu: [
      {
        label: 'Furniture',
        megaMenu: [
          {
            to: '#',
            label: 'Sofas & Couches',
          },

          {
            to: '#',
            label: 'Armchairs',
          },

          {
            to: '#',
            label: 'Bed Frames',
          },

          {
            to: '#',
            label: 'Beside Tables',
          },

          {
            to: '#',
            label: 'Dressing Tables',
          },
        ],
      },
      {
        label: 'Lighting',
        megaMenu: [
          {
            to: '#',
            label: 'Light Bulbs',
          },

          {
            to: '#',
            label: 'Lamps',
          },

          {
            to: '#',
            label: 'Celling Lights',
          },

          {
            to: '#',
            label: 'Wall Lights',
          },
          {
            to: '#',
            label: 'Bathroom Lighting',
          },
        ],
      },
      {
        label: 'Home Accessories',
        megaMenu: [
          {
            to: '#',
            label: 'Decorative Accessories',
          },

          {
            to: '#',
            label: 'Candals & Holders',
          },

          {
            to: '#',
            label: 'Home Fragrance',
          },

          {
            to: '#',
            label: 'Mirrors',
          },
          {
            to: '#',
            label: 'Clocks',
          },
        ],
      },
      {
        label: 'Garden & Outdoors',
        megaMenu: [
          {
            to: '#',
            label: 'Garden Furniture',
          },

          {
            to: '#',
            label: 'Lawn Mowers',
          },

          {
            to: '#',
            label: 'Pressure Washers',
          },
          {
            to: '#',
            label: 'All Garden Tools',
          },
          {
            to: '#',
            label: 'Outdoor Dining',
          },
        ],
      },
    ],
  },
  healthAndBeauty: {
    link: 'Healthy & Beauty',
    icon: <FiHeart size={20} />,
    hasMenu: false,
  },
  gifts: {
    link: 'Gift Ideas',
    icon: <ImGift size={20} />,
    hasMenu: false,
  },
  games: {
    link: 'Toy & Games',
    icon: <IoGameControllerOutline size={20} />,
    hasMenu: false,
  },
  cooking: {
    link: 'Cooking',
    icon: <CiBowlNoodles size={20} />,
    hasMenu: false,
  },
  smartPhons: {
    link: 'Smart Phones',
    icon: <SlScreenSmartphone size={20} />,
    hasMenu: false,
  },
  camera: {
    link: 'Cameras & Photo',
    icon: <MdOutlineCameraEnhance size={20} />,
    hasMenu: false,
  },
  accessories: {
    link: 'Accessories',
    icon: <BsGem size={20} />,
    hasMenu: false,
  },
};
