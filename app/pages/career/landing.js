// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerLandingView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerLandingPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerLandingPage() {
  return (
    <>
      <Head>
        <title>Landing | ZONE UI</title>
      </Head>

      <CareerLandingView />
    </>
  );
}
