// interfaces/index.ts

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // optional
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

