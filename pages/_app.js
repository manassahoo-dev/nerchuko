// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/app.scss';

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return <Layout><div className="container my-4"><Component {...pageProps} /></div></Layout>
}

export default MyApp
