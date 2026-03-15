import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
   children: ReactNode | ReactNode[];
}

const GlobalLayout: FC<Props> = ({ children }: Props) => {
   return (
      <div className="flex flex-col gap-4 p-6 h-screen max-w-300 mx-auto shadow-2xl">
         <header className="flex items-center justify-between gap-4">
            <Link href={'/'}>
               <span className="text-xl  font-bold">🏠 케빈문고</span>
            </Link>
         </header>
         <div className="pb-20 text-neutral-700">{children}</div>
         <hr />
         <footer className="py-2 text-neutral-500">Created by @kevin</footer>
      </div>
   );
};

export default GlobalLayout;
