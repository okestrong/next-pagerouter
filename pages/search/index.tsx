import { useRouter } from 'next/router';
import Title from '@/components/title';

export default function Page() {
   const router = useRouter();
   const { q } = router.query;

   return (
      <div className="flex flex-col space-y-3">
         <Title>Search</Title>
         <p>{q}</p>
      </div>
   );
}
