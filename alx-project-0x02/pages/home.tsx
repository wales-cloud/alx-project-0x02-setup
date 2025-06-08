import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';

export default function HomePage() {
  const [cards, setCards] = useState([
    { title: 'Getting Started', content: 'Intro to Next.js, TypeScript, Tailwind CSS.' },
    { title: 'Reusable Components', content: 'Like this card, reused with different content.' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    setCards(prev => [...prev, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add Post
          </button>
        </div>

        {cards.map((card, idx) => (
          <Card key={idx} title={card.title} content={card.content} />
        ))}

        {showModal && (
          <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddCard} />
        )}
      </main>
    </>
  );
}
