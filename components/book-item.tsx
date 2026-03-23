import { FC } from 'react';

interface Props {
   book: BookType;
}

const BookItem: FC<Props> = ({ book }: Props) => {
   return (
      <div className="flex gap-3">
         <img src={'https://picsum.photos/200/300'} alt={book.title} width={100} height={150} />
         <div className="flex flex-col">
            <div className="flex">
               <span className="text-neutral-500 font-bold">[{book.category}]&nbsp;</span>
               <span className="text-lg font-bold mb-1">{book.title}</span>
            </div>
            <span className="text-lg font-medium text-neutral-800">{book.subtitle}</span>
            <div className="flex flex-1 items-center space-x-1.5">
               <span className="text-neutral-500">{book.author}</span>
               <span className="text-neutral-500">|</span>
               <span className="text-neutral-500">{book.publisher}</span>
            </div>
         </div>
      </div>
   );
};

export default BookItem;
