import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = React.useState(() => new QueryClient());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </Hydrate>
    </QueryClientProvider>
    </PersistGate>
    </Provider>
  );
}
