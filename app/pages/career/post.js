// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerPostView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerPostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerPostPage() {
  return (
    <>
      <Head>
        <title>The A-Z Of Event Post | ZONE UI</title>
      </Head>

      <CareerPostView />
    </>
  );
}
