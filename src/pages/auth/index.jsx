/* eslint-disable react/prop-types */
import './style.css';
import { Link } from 'react-router-dom';
import { BreadcrumbList, PageHeader, Password, SigninTab, SignupTab } from '../../components';

import { FcGoogle } from 'react-icons/fc';
import { RiTwitterXLine } from 'react-icons/ri';
import { useState } from 'react';

const Authentication = () => {
  const [activeTab, setActiveTab] = useState('#signin');
  const [passTabActive, setPassTabActive] = useState(false);

  return (
    <article className='authentication'>
      <div className='container'>
        <BreadcrumbList />
      </div>
      <PageHeader pageTitle='My account' />

      <div className='container'>
        <div className='login-popup'>
          <div className='tab'>
            <ul className='nav nav-tabs'>
              <li className={`nav-item ${activeTab === '#signin' ? 'active' : ''}`}>
                <Link to='#signin' onClick={() => setActiveTab('#signin')}>
                  sign in
                </Link>
              </li>

              <li className={`nav-item ${activeTab === '#signup' ? 'active' : ''}`}>
                <Link to='#signup' onClick={() => setActiveTab('#signup')}>
                  sign up
                </Link>
              </li>
            </ul>

            <div className='tab-content'>
              <SigninTab activeTab={activeTab} setPassState={setPassTabActive} />
              <SignupTab activeTab={activeTab} />
              <div className='social-links'>
                <div className='links-list'>
                  <p>OR</p>
                  <Link to='#' className='btn btn-outline social-link social-google'>
                    <FcGoogle />
                    <span>Sign up with Google</span>
                  </Link>
                  <Link to='#' className='btn btn-dark social-link social-x'>
                    <RiTwitterXLine />
                    <span>Sign up with X</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PASSWORD */}
        <Password
          activeTab={activeTab}
          passTabActive={passTabActive}
          setPassState={setPassTabActive}
        />
      </div>
    </article>
  );
};
export default Authentication;
