import { useRouter } from 'next/router';
import Title from '@/components/title';

export default function Page() {
   const router = useRouter();
   const { id } = router.query;

   return <Title>Book {id}</Title>;
}
