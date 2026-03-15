import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@/pages/404/404.css';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
   return (
      <div className="p-5">
         <header className="flex items-center justify-between w-50 mb-4">
            <Link href="/">Home</Link>
            <Link href="/search">Search</Link>
            <Link href="/book/1">Book</Link>
         </header>
         <Component {...pageProps} />
      </div>
   );
}
