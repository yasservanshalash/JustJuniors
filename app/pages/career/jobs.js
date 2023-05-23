// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerJobsView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerJobsPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerJobsPage() {
  return (
    <>
      <Head>
        <title>Jobs | ZONE UI</title>
      </Head>

      <CareerJobsView />
    </>
  );
}
