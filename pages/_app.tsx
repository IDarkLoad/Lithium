// pages/_app.js
import '../styles/globals.css';
import Footer from '../components/Footer';
import { Montserrat } from 'next/font/google';
import React from 'react';
import { Head } from 'next/document';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lithium Company</title>
      </Head>
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default MyApp;
