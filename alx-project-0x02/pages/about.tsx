import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About This Project</h1>
      </main>
    </>
  );
}
