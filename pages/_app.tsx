import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { QueryClientProvider, UIProvider } from '@/provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <QueryClientProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </QueryClientProvider>
    </main>
  );
}
