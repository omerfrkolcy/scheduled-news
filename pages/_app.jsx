import * as React from 'react';

import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NavBar />
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}

export default App;
