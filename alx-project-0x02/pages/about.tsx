import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-4">About This Project</h1>
        <p>This page showcases different button sizes and shapes using a reusable component.</p>

        <div className="space-x-4">
          <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button label="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
