import React from "react";
import App from "next/app";
import Head from "next/head";

import Store from '../store/store';
import { observer } from 'mobx-react';

import "../styles/index.scss";

import { Header, Footer } from "../components";


const store = new Store();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/logo192.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

          <meta name="Description" content="Author: Muhammed Deniz"></meta>

          <title>Ana Sayfa</title>
        </Head>
        
        <Header />
          <div className='myBody' lang="tr">
            <Component {...pageProps} mystore={store}/>
          </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default observer(MyApp);
