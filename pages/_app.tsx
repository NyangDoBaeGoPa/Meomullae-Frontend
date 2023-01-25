import type { AppProps } from 'next/app';

import 'tailwindcss/tailwind.css';
import { HeaderLogo, MainChooseFlow } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>
        <HeaderLogo />
      </header>
      <MainChooseFlow />
      <Component {...pageProps} />
    </>
  );
}
