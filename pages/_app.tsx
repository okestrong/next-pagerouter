import '@/styles/globals.css';
import '@/pages/404/404.css';
import GlobalLayout from '@/components/layout/global-layout';
import { ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

type NextPageWithProps = NextPage & {
   getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
   Component,
   pageProps,
}: AppProps & {
   Component: NextPageWithProps;
}) {
   const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

   return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
