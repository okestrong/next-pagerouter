import { ReactNode } from 'react';
import SearchLayout from '@/components/layout/search-layout';
import BookItem from '@/components/book-item';
import { fetchBooks } from '@/lib/book-api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async ctx => {
   const books = await fetchBooks();
   return {
      props: {
         books,
      },
   };
};

export default function Home({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
   return (
      <div className="flex flex-col gap-3 px-4">
         {books?.map((book: BookType, index: number) => (
            <BookItem key={book.id} book={book} />
         ))}
      </div>
   );
}

Home.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
