import { ReactNode, useEffect, useState } from 'react';
import SearchLayout from '@/components/layout/search-layout';
import BookItem from '@/components/book-item';
import { fetchBooks, fetchRecoBooks } from '@/lib/book-api';

export default function Home() {
   const [books, setBooks] = useState<BookType[]>([]);
   const [recoBooks, setRecoBooks] = useState<BookType[]>([]);

   useEffect(() => {
      fetchBooks().then(books => setBooks(books));
      fetchRecoBooks().then(books => setRecoBooks(books));
   }, []);

   return (
      <div className="flex flex-col space-y-5 px-4">
         <section className="flex flex-col w-full gap-3">
            <span className="text-xl font-bold"> 추천 도서</span>
            {recoBooks?.map((book: BookType) => (
               <BookItem key={book.id} book={book} />
            ))}
         </section>
         <section className="flex flex-col w-full gap-3">
            <h3 className="text-xl font-bold">전체 도서</h3>
         </section>
         {books?.map((book: BookType) => (
            <BookItem key={book.id} book={book} />
         ))}
      </div>
   );
}

Home.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
