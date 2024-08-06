/* eslint-disable react/prop-types */
import './style.css';
import Images from '../../assets/images/images';
import {
  AccordionSection,
  BreadcrumbList,
  CounterSection,
  Introduce,
  PageHeader,
} from '../../components';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { SlSocialInstagram } from 'react-icons/sl';

const AboutUs = () => {
  const settings = {
    slidesToShow: 1,
    speed: 500,
    infinite: false,
    dots: true,
  };

  const members = [
    {
      name: 'John Doe',
      position: 'Founder & CEO',
      image: Images.about.members.member_1,
    },
    {
      name: 'Jessica Doe',
      position: 'Marketing',
      image: Images.about.members.member_2,
    },
    {
      name: 'Rick Edward Doe',
      position: 'Developer',
      image: Images.about.members.member_3,
    },
    {
      name: 'Melinda Wolosky',
      position: 'Design',
      image: Images.about.members.member_4,
    },
  ];

  const socialLinks = [
    { label: 'facebook', link: '#', icon: <FaFacebookF /> },
    { label: 'X', link: '#', icon: <BsTwitterX /> },
    { label: 'Inestagram', link: '#', icon: <SlSocialInstagram /> },
  ];
  return (
    <article className='about-us'>
      <div className='page-wrapper'>
        <BreadcrumbList />
        <PageHeader pageTitle='about us' />

        <div className='page-content'>
          <div className='container'>
            <section className='section introduce-section'>
              <div className='section-wrapper'>
                <Introduce
                  title="We're Devoted Marketing 
                  Consultants Helping Your Business Grow"
                  paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  labore et dolore magna aliqua. Venenatis tellu metus'
                />

                <p></p>
                <figure>
                  <img
                    src={Images.about.banner.about_banner_1}
                    alt='Banner'
                    width='1240'
                    height='540'
                    style={{ backgroundColor: '#D0C1AE' }}
                    className='object-cover'
                  />
                </figure>
              </div>
            </section>

            <AccordionSection />
            <CounterSection />
          </div>

          <section className='section boost-section'>
            <div className='container'>
              <div className='boost-wrapper'>
                <figure className='boost-media'>
                  <img
                    src={Images.about.banner.about_banner_3}
                    alt='Banner'
                    width='610'
                    height='450'
                    style={{ backgroundColor: '#9E9DA2' }}
                    className='object-cover'
                  />
                </figure>
                <div className='details'>
                  <h4 className='title'>
                    We Boost Our Client&apos;s Bottom Line by Optimizing Their Growth Potential
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Venenatis tellus in. metus
                    vulputate eu scelerisque felis. Vel pretium lectus qua . Arpis massa. Nunc id
                    cursus metus ididunt ut labore metus vulputate episcing.
                  </p>
                  <Link to='#' className='btn btn-dark'>
                    Visit our store
                  </Link>
                </div>
              </div>
              <div className='awards-wrapper'>
                <h4 className='title'>Awards</h4>
                <div className='award'>
                  <Slider {...settings}>
                    <ImageBox
                      img={Images.about.awards.award_1}
                      paragraph='Winner Seo Master MAGT Smart Start Award 2018'
                    />
                    <ImageBox
                      img={Images.about.awards.award_2}
                      paragraph='Top Social Media Agencies Next Partner 2019'
                    />
                    <ImageBox
                      img={Images.about.awards.award_3}
                      paragraph='5 Fastest Growing Abstract Solution Providers 2020'
                    />
                    <ImageBox
                      img={Images.about.awards.award_4}
                      paragraph='National Excellence Agencie Award Winner 2021'
                    />
                  </Slider>
                </div>
              </div>
            </div>
          </section>

          <section className='section member-section'>
            <div className='section-wrappers'>
              <div className='container'>
                <h2 className='title'>Meet Our Leaders</h2>
                <p>
                  Nunc id cursus metus aliquam. Libero id faucibus nisl tincidunt eget. Aliquam
                  maecenas ultricies mi eget mauris. Volutpat ac
                </p>

                <Slider {...settings}>
                  {members.map((member, index) => (
                    <div key={index} className='member'>
                      <figure>
                        <img
                          src={member.image}
                          alt='Member'
                          width='295'
                          height='332'
                          className='object-cover'
                        />

                        <div className='overlay'>
                          {socialLinks.map((link, index) => (
                            <Link to={link.link} key={index} className='overlay-item'>
                              {link.icon}
                            </Link>
                          ))}
                        </div>
                      </figure>

                      <div className='member-info'>
                        <h4>{member.name}</h4>
                        <p>{member.position}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
export default AboutUs;

const ImageBox = ({ img, paragraph }) => {
  return (
    <div className='image-box'>
      <figure>
        <img src={img} alt='Award Image' width='109' height='105' />
      </figure>
      <p>
        {paragraph} <br />
      </p>
    </div>
  );
};
