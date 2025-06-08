import { type PostProps } from '@/interfaces';
import { FC } from 'react';

const PostCard: FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold text-blue-600 mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
