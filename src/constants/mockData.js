import { routesConstatns } from './routesConstants';
export const linksList = [
  {
    label: 'Company',
    list: [
      { to: routesConstatns.ABOUT_US, label: 'about us' },
      { to: '#', label: 'team member' },
      { to: '#', label: 'career' },
      { to: routesConstatns.CONTACT_US, label: 'contect us' },
      { to: '#', label: 'affilate' },
      { to: '#', label: 'order hisory' },
    ],
  },
  {
    label: 'Account',
    list: [
      { to: '#', label: 'Track My Order' },
      { to: '#', label: 'View Cart' },
      { to: '#', label: 'Sign In' },
      { to: '#', label: 'Help' },
      { to: '#', label: 'My Wishlist' },
      { to: '#', label: 'Privacy Policy' },
    ],
  },

  {
    label: 'Account',
    list: [
      { to: '#', label: 'Payment Methods' },
      { to: '#', label: 'Money-back guarantee' },
      { to: '#', label: 'Product Returns' },
      { to: '#', label: 'Support Center' },
      { to: '#', label: 'Shipping' },
      { to: '#', label: 'Term and Conditions' },
    ],
  },
];

const categories = [
  {
    label: 'Consumer Electric',
    list: [
      { label: 'TV Television', to: '#' },
      {
        label: 'Air Condition',
        to: '#',
      },
      {
        label: 'Refrigerator',
        to: '#',
      },
      {
        label: 'Washing Machine',
        to: '#',
      },
      {
        label: 'Audio Speaker',
        to: '#',
      },
      {
        label: 'Security Camera',
        to: '#',
      },

      {
        label: 'View All',
        to: '#',
      },
    ],
  },
  {
    label: 'Clothing & Apparel',
    list: [
      { label: "Men's T-shirt", to: '#' },
      {
        label: 'Dresses',
        to: '#',
      },
      {
        label: "Men's Sneacker",
        to: '#',
      },
      {
        label: 'Leather Backpack',
        to: '#',
      },
      {
        label: 'Watches',
        to: '#',
      },
      {
        label: 'Sunglasses',
        to: '#',
      },

      {
        label: 'Boots',
        to: '#',
      },
      {
        label: 'Rayban',
        to: '#',
      },
      {
        label: 'Acccessories',
        to: '#',
      },
    ],
  },
  {
    label: 'Home, Garden & Kitchen',
    list: [
      { label: "Men's T-shirt", to: '#' },
      {
        label: 'Sofa',
        to: '#',
      },
      {
        label: 'Chair',
        to: '#',
      },
      {
        label: 'Bed Room',
        to: '#',
      },
      {
        label: 'Living Room',
        to: '#',
      },
      {
        label: 'Cookware',
        to: '#',
      },

      {
        label: 'Blender',
        to: '#',
      },
      {
        label: 'Decor',
        to: '#',
      },
      {
        label: 'Library',
        to: '#',
      },
    ],
  },
  {
    label: 'Health & Beauty',
    list: [
      { label: 'Skin Care', to: '#' },
      {
        label: 'Body Shower',
        to: '#',
      },
      {
        label: 'Makeup',
        to: '#',
      },
      {
        label: 'Hair Care',
        to: '#',
      },
      {
        label: 'Lipstick',
        to: '#',
      },
      {
        label: 'Perfume',
        to: '#',
      },

      {
        label: 'View all',
        to: '#',
      },
    ],
  },
  {
    label: 'Jewelry & Watches',
    list: [
      { label: 'Necklace', to: '#' },
      {
        label: 'Pendant',
        to: '#',
      },
      {
        label: 'Diamond Ring',
        to: '#',
      },
      {
        label: 'Leather Watcher',
        to: '#',
      },
      {
        label: 'Rolex',
        to: '#',
      },
      {
        label: 'Gucci',
        to: '#',
      },

      {
        label: 'Australian Opal',
        to: '#',
      },
      {
        label: 'Ammolite',
        to: '#',
      },
      {
        label: 'Sun Pyrite',
        to: '#',
      },
    ],
  },
  {
    label: 'Computer & Technologies',
    list: [
      { label: 'Laptop', to: '#' },
      {
        label: 'iMac',
        to: '#',
      },
      {
        label: 'Smartphone',
        to: '#',
      },
      {
        label: 'Tablet',
        to: '#',
      },
      {
        label: 'Apple',
        to: '#',
      },
      {
        label: 'Asus',
        to: '#',
      },

      {
        label: 'Drone',
        to: '#',
      },
      {
        label: 'Wireless Speaker',
        to: '#',
      },
      {
        label: 'Game Controller',
        to: '#',
      },
      {
        label: 'View all',
        to: '#',
      },
    ],
  },
];

const selectedList = {
  orederByList: [
    { value: 'default', label: 'default sorting' },
    { value: 'popularity', label: 'Sort by popularity' },
    { value: 'rating', label: 'Sort by average rating' },
    { value: 'latest', label: 'Sort by latest' },
    { value: 'price-low', label: 'Sort by pric: low to high' },
    { value: 'price-high', label: 'Sort by price: high to low' },
  ],
  countList: [
    { value: 9, label: 'show 9' },
    { value: 12, label: 'show 12' },
    { value: 24, label: 'show 24' },
    { value: 32, label: 'show 32' },
  ],
};

const filterItems = {
  allCategories: [
    { label: 'Accessories', to: '#' },
    { label: 'Babies', to: '#' },
    { label: 'Beauty', to: '#' },
    { label: 'Decoration', to: '#' },
    { label: 'Electronics', to: '#' },
    { label: 'Fashion', to: '#' },
    { label: 'Food', to: '#' },
    { label: 'Furniture', to: '#' },
    { label: 'Kitchen', to: '#' },
    { label: 'Medical', to: '#' },
    { label: 'Sports', to: '#' },
    { label: 'Watches', to: '#' },
  ],

  priceRanges: [
    { label: '$0.00 - $100.00', value: '100', to: '' },
    { label: '$100.00 - $200.00', value: '200', to: '' },
    { label: '$200.00 - $300.00', value: '300', to: '' },
    { label: '$300.00 - $500.00', value: '500', to: '' },
    { label: '$500.00+', value: '500+', to: '' },
  ],
  sizeRange: [
    {
      label: 'Extra Large',
      value: 'xl',
      to: '#',
    },
    {
      label: 'Large',
      value: 'l',
      to: '#',
    },
    {
      label: 'Medium',
      value: 'm',
      to: '#',
    },

    {
      label: 'Small',
      value: 's',
      to: '#',
    },
  ],
  brands: [
    { label: 'Elegant Auto Group', value: 'Elegant Auto Group', to: '#' },
    { label: 'Green Grass', value: 'Green Grass', to: '#' },
    { label: 'Node Js', value: 'Node Js', to: '#' },
    { label: 'NS8', value: 'NS8', to: '#' },
    { label: 'Red', value: 'Red', to: '#' },
    { label: 'Skysuite Tech', value: 'Skysuite Tech', to: '#' },
    { label: 'Sterling', value: 'Sterling', to: '#' },
  ],
  colorOptions: [
    { label: 'Black', value: 'black', to: '#' },
    { label: 'Blue', value: 'blue', to: '#' },
    { label: 'Brown', value: 'brown', to: '#' },
    { label: 'Green', value: 'green', to: '#' },
    { label: 'Grey', value: 'grey', to: '#' },
    { label: 'Orange', value: 'orange', to: '#' },
    { label: 'Yellow', value: 'yellow', to: '#' },
  ],
};
const mainMenuList = [
  { label: 'Home', path: routesConstatns.HOME },
  { label: 'Blog', path: '/blog' },
  { label: 'About us', path: routesConstatns.ABOUT_US },
  { label: 'Contact', path: routesConstatns.CONTACT_US },
  { label: 'FAQ', path: '/faq' },
  { label: 'Pages', path: '/pages' },
];
const megaMenuList = {
  fashion: [
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
  homeAndGarden: [
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
      ],
      label2: 'Living Room',
      megaMenu2: [
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
      label2: 'Kitchen & Dining',
      megaMenu2: [
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
  electronics: [
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
      label2: 'TV & Video',
      megaMenu2: [
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
      label2: 'Cell Phones',
      megaMenu2: [
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
  furnaiture: [
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
};
export { categories, selectedList, filterItems, mainMenuList, megaMenuList };
