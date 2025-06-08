import { type FC } from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: FC<ButtonProps> = ({ label, size = 'medium', shape = 'rounded-md', onClick }) => {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${shape} ${sizeClass[size]} hover:bg-blue-700 transition`}
    >
      {label}
    </button>
  );
};

export default Button;
