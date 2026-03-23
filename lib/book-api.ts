import { API_URL } from '@/utils/vars';

export async function fetchBooks(q?: string): Promise<BookType[]> {
   try {
      let url = `${API_URL}/book`;
      if (q) {
         url += `/search/${q}`;
      }
      const res = await fetch(url);
      if (res.status === 200) {
         return await res.json();
      } else {
         throw new Error(res.statusText);
      }
   } catch (error) {
      console.error(error);
      return [];
   }
}

export async function fetchBook(id: number): Promise<BookType | null> {
   try {
      const res = await fetch(`${API_URL}/book/${id}`);
      if (res.status === 200) {
         return await res.json();
      } else {
         throw new Error(res.statusText);
      }
   } catch (error) {
      console.error(error);
      return null;
   }
}

export async function fetchRecoBooks(): Promise<BookType[]> {
   try {
      const res = await fetch(`${API_URL}/book/random`);
      if (res.status === 200) {
         return await res.json();
      } else {
         throw new Error(res.statusText);
      }
   } catch (error) {
      console.error(error);
      return [];
   }
}
