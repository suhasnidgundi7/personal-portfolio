// Home.js

import React from 'react';
import styles from './home.module.css';
import Head from 'next/head';
import CustomTypeWriter from './components/customTypeWriter';
import HomeSubPage from './components/homeSubPage';

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
      <HomeSubPage/>
    </>
  );
};

export default Home;
