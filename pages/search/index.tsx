import Title from '@/components/title';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetchBooks } from '@/lib/book-api';
import { ReactNode } from 'react';
import SearchLayout from '@/components/layout/search-layout';
import BookItem from '@/components/book-item';

export const getServerSideProps: GetServerSideProps = async ctx => {
   const [books] = await Promise.all([fetchBooks(ctx.query.q! as string)]);

   return {
      props: {
         books,
      },
   };
};

export default function Page({ books }: InferGetServerSidePropsType<typeof getServerSideProps>) {
   return (
      <div>
         <section className="flex flex-col gap-3 w-full">
            <Title>검색된 도서</Title>
            {books?.map((book: BookType) => (
               <BookItem book={book} key={book.id} />
            ))}
         </section>
      </div>
   );
}

Page.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
