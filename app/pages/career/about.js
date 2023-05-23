// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerAboutView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerAboutPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerAboutPage() {
  return (
    <>
      <Head>
        <title>About Us | ZONE UI</title>
      </Head>

      <CareerAboutView />
    </>
  );
}
