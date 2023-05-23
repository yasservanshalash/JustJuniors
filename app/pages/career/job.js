// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerJobView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerJobPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerJobPage() {
  return (
    <>
      <Head>
        <title>Marketing Coordinator | ZONE UI</title>
      </Head>

      <CareerJobView />
    </>
  );
}
