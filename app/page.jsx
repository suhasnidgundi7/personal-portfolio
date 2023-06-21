import React from 'react';
import styles from './home.module.css';
import Head from 'next/head';

export const metadata = {
  title: 'Home',
  description: '',
}

const home = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      Home
    </>
  );
};

export default home;
