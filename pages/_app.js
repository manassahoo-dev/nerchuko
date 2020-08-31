import Router from 'next/router';
import { initGA, logPageView } from '../components/GoogleAnalytics'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import '../styles/globals.css';
import '../styles/app.scss';

import Layout from "../components/Layout";
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
  return <Layout><div className="container my-4"><Component {...pageProps} /></div></Layout>
}

export default MyApp
