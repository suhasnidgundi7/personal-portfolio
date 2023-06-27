// Home.js

import React from "react";
import "./home.css";
import Head from "next/head";
import HomeSubPage from "./components/homeSubPage";

export const metadata = {
  title: "Personal Portfolio | Home",
  description: "",
};

const Home = () => {
  return (
    <>
      <section className="animated-section">
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <HomeSubPage />
      </section>
    </>
  );
};

export default Home;
