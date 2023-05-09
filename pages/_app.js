import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = React.useState(() => new QueryClient());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />, pageProps)}
      </Hydrate>
    </QueryClientProvider>
  );
}
