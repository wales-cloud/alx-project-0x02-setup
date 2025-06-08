import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">User Directory</h1>
        <div className="space-y-4">
          {users.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </>
  );
}
