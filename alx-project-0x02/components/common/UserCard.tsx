import { type FC } from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-bold text-green-700 mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-sm text-gray-500">{address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
};

export default UserCard;
