import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type GetStaticProps } from 'next';
import { type PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Recent Posts</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard
              key={post.title}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </main>
    </>
  );
}
