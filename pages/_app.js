import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { useState } from 'react';
import AppLayout from "../components/AppLayout";
import UserContext from '../components/contexts/UserContext';
import { initGA, logPageView } from '../components/GoogleAnalytics';
import '../public/styles/antd.less';


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
  const login = (e) => { setUser(e); }
  const logOut = (e) => {
    localStorage.clear();
    setUser(null);
    Router.push('/');
  }

  return (
    <UserContext.Provider value={{ user: user, login: login, logOut: logOut }}>
      <AppLayout><Component {...pageProps} /></AppLayout>
    </UserContext.Provider>
  )
}

export default MyApp
