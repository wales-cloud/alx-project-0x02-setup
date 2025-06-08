export interface User {
  id: number;
  name: string;
  email: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
}
export interface PostProps {
  userId: number;
  title: string;
  body: string;
}
