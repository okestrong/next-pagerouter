import Title from '@/components/title';
import { ReactNode } from 'react';
import SearchLayout from '@/components/layout/search-layout';

export default function Home() {
   return <Title>Home</Title>;
}

Home.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
