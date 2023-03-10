import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { UIProvider } from '@/provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </main>
  );
}
