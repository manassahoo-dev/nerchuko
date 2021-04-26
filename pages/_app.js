import { BackTop } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Provider } from 'next-auth/client';
import AppLayout from "../components/AppLayout";
import { screenResolution } from '../components/constants/screenResolution';
import Meta from '../components/Meta';
import '../public/styles/antd.less';

axios.interceptors.request.use(request => {
  const accessToken = Cookies.get('next-auth.session-token');
  request.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  console.log(request);
  return request;
},
  error => {
    return Promise.reject(error);
  });

export default function MyApp({ Component, pageProps }) {

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
