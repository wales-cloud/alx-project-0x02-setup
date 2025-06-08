import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      </main>
    </>
  );
}
