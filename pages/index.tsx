import { ReactNode } from 'react';
import SearchLayout from '@/components/layout/search-layout';
import BookItem from '@/components/book-item';
import { fetchBooks, fetchRecoBooks } from '@/lib/book-api';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async ctx => {
   const [books, recoBooks] = await Promise.all([fetchBooks(), fetchRecoBooks()]);
   return {
      props: {
         books,
         recoBooks,
      },
   };
};

export default function Home({ books, recoBooks }: InferGetServerSidePropsType<typeof getServerSideProps>) {
   return (
      <div className="flex flex-col space-y-5 px-4">
         <section className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">추천 도서</h3>
            {recoBooks?.map((book: BookType) => (
               <BookItem key={book.id} book={book} />
            ))}
         </section>
         <section className="flex flex-col gap-3">
            <h3 className="text-xl font-bold">전체 도서</h3>
            {books?.map((book: BookType, index: number) => (
               <BookItem key={book.id} book={book} />
            ))}
         </section>
      </div>
   );
}

Home.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
