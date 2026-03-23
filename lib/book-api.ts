import { API_URL } from '@/utils/vars';

export async function fetchBooks(): Promise<BookType[]> {
   try {
      const res = await fetch(`${API_URL}/book`);
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
