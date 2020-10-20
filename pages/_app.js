import { useState } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../components/GoogleAnalytics'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/globals.css';
import '../styles/app.scss';

import Layout from "../components/Layout";
import UserContext from '../components/contexts/UserContext';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  if (!window.GA_INITIALIZED) {
    initGA()
    window.GA_INITIALIZED = true
  }
  logPageView()
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null)
  const login = (e) => {
    console.log('signIn', e);
    setUser(e);
  }
  const logout = (e) => {
    localStorage.removeItem('user');
    setUser(null);
    Router.push('/login');
  }

  return (
    <UserContext.Provider value={{ user: user, login: login, logout: logout }}>
      <Layout><div className="container my-4"><Component {...pageProps} /></div></Layout>
    </UserContext.Provider>
  )
}

export default MyApp
