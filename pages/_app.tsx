import { Inter } from '@next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import { UIProvider } from '@/provider';

const queryClient = new QueryClient();

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <QueryClientProvider client={queryClient}>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </QueryClientProvider>
    </main>
  );
}
