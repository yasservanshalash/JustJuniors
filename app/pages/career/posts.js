// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerBlogView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerBlogPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerBlogPage() {
  return (
    <>
      <Head>
        <title>Blog | ZONE UI</title>
      </Head>

      <CareerBlogView />
    </>
  );
}
