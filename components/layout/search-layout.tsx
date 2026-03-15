import React, { FC, ReactNode, useCallback, useState } from 'react';
import { useRouter } from 'next/router';

interface Props {
   children: ReactNode | ReactNode[];
}

const SearchLayout: FC<Props> = ({ children }: Props) => {
   const [search, setSearch] = useState('');
   const router = useRouter();
   const { q } = router.query;

   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   };

   const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         onSearch();
      }
   };

   const onSearch = () => {
      if (!!search) {
         router.push(`/search?q=${search}`);
      }
   };

   return (
      <div>
         <div className="flex items-center h-12 my-3">
            <input
               type="text"
               placeholder="케빈문고 통합 검색"
               className="rounded-l-md flex-1 h-full border p-2"
               onChange={onChangeInput}
               onKeyDown={onKeyDown}
            />
            <button className="h-full w-12 rounded-r-md flex items-center justify-center text-xl bg-blue-500 text-white" onClick={onSearch}>
               <span>🔍</span>
            </button>
         </div>
         <div>{children}</div>
      </div>
   );
};

export default SearchLayout;
