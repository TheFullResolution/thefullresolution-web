import 'focus-visible/dist/focus-visible.min.js';
import type { AppProps as NextAppProps } from 'next/app';

function MyApp({ Component, pageProps }: NextAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
