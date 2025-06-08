import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
        
        <Card title="Getting Started" content="This project introduces Next.js, TypeScript, and Tailwind CSS." />
        <Card title="Reusable Components" content="Components like this card are easy to reuse with different content." />
        <Card title="Modular Design" content="Organizing code properly improves maintainability and scalability." />
      </main>
    </>
  );
}
