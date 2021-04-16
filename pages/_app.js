import { BackTop } from 'antd';
import { Provider } from 'next-auth/client';
import AppLayout from "../components/AppLayout";
import { screenResolution } from '../components/constants/screenResolution';
import Meta from '../components/Meta';
import '../public/styles/antd.less';

function MyApp({ Component, pageProps }) {
  const resolution = screenResolution();

  return (
    <Provider session={pageProps.session}>
      <BackTop />
      <Meta />
      <AppLayout>
        <Component {...pageProps} resolution={resolution} />
      </AppLayout>
    </Provider>
  )
}

export default MyApp
