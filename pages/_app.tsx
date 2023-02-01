import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import { UIProvider } from '@/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </>
  );
}
