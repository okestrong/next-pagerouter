import { useRouter } from 'next/router';
import Title from '@/components/title';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { fetchBook } from '@/lib/book-api';

export const getServerSideProps: GetServerSideProps = async ctx => {
   const book = await fetchBook(+ctx.params!.id!);
   if (!book) {
      return { notFound: true };
   }

   return {
      props: {
         book,
      },
   };
};

export default function Page() {
   const router = useRouter();
   const { id } = router.query;

   return <Title>Book {id}</Title>;
}
