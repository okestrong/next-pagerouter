import { ReactNode, useEffect, useState } from 'react';
import SearchLayout from '@/components/layout/search-layout';
import BookItem from '@/components/book-item';
import { fetchBooks } from '@/lib/book-api';

export default function Home() {
   const [books, setBooks] = useState<BookType[]>([]);

   useEffect(() => {
      fetchBooks().then(books => setBooks(books));
   }, []);

   return (
      <div className="flex flex-col gap-3 px-4">
         {books?.map((book, index) => (
            <BookItem key={book.id} book={book} />
         ))}
      </div>
   );
}

Home.getLayout = (page: ReactNode) => <SearchLayout>{page}</SearchLayout>;
