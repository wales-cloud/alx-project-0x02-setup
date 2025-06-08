import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>This is the placeholder for fetching and displaying posts.</p>
      </main>
    </>
  );
}
