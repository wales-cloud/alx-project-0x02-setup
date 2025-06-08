import { FC } from 'react';
import { CardProps } from '@/interfaces';

const Card: FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-blue-600">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
