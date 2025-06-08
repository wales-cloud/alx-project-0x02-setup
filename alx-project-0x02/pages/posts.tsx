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
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        <p>This page will display a list of posts fetched from an external API.</p>
      </main>
    </>
  );
}
