import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project</title>
      </Head>
      <Header />
      <main className="flex justify-center items-center h-screen bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">
          Welcome to ALX Next.js Project Setup!
        </h2>
      </main>
    </>
  );
}
