// Home.js

import React from 'react';
import styles from './home.module.css';
import Head from 'next/head';
import CustomTypeWriter from './components/customTypeWriter';

export const metadata = {
  title: 'Home',
  description: '',
}

const Home = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Home Subpage */}
      <div className="animated-section start-page section-active animated-section-moveFromRight">
        <div className="section-content vcentered">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="title-block">
                <h2>Suhas Nidgundi</h2>
                <div className="">
                  <div className="item">
                    <CustomTypeWriter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      {/* End of Home Subpage */}
    </>
  );
};

export default Home;
