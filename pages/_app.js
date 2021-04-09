import { BackTop } from 'antd';
import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';
import AppLayout from "../components/AppLayout";
import { screenResolution } from '../components/constants/screenResolution';
import UserContext from '../components/contexts/UserContext';

import '../public/styles/antd.less';

function MyApp({ Component, pageProps }) {
  const resolution = screenResolution();

  const [user, setUser] = useState(null)
  const login = (e) => { setUser(e); }
  const logOut = (e) => {
    localStorage.clear();
    setUser(null);
    Router.push('/');
  }

  return (
    <UserContext.Provider value={{ user: user, login: login, logOut: logOut }}>
      <Head>
        <title>The best way to learn Telugu - Nerchuko</title>
      </Head>
      <BackTop />
      <AppLayout><Component {...pageProps} resolution={resolution} /></AppLayout>
    </UserContext.Provider>
  )
}

export default MyApp
