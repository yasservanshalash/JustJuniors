// next
import Head from 'next/head';
// layouts
import MainLayout from 'app/layouts/main';
// sections
import { CareerContactView } from 'app/sections/_career/view';

// ----------------------------------------------------------------------

CareerContactPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

// ----------------------------------------------------------------------

export default function CareerContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | ZONE UI</title>
      </Head>

      <CareerContactView />
    </>
  );
}
