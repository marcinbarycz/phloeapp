import '@/styles/globals.css';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  const isAdminRoute = pageProps.pathname?.startsWith('/admin');
  if (isAdminRoute) {
    const AdminLayout = require('@/components/AdminLayout').default;
    return <AdminLayout><Component {...pageProps} /></AdminLayout>;
  }
  return <Layout><Component {...pageProps} /></Layout>;
}
