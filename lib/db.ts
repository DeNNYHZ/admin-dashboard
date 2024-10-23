export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  sold: number;
  category: string;
  image: string;
  lowStockAlert?: number;
  supplier?: string;
  lastRestocked?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  totalSpent: number;
  joinDate: string;
  lastPurchase?: string;
  preferences?: string[];
  referralCode?: string;
  referredBy?: string;
}

export interface Transaction {
  id: string;
  customerId: string;
  products: { productId: string; quantity: number; price: number }[];
  total: number;
  date: string;
  pointsEarned: number;
  status: 'completed' | 'pending' | 'refunded';
  paymentMethod?: string;
  shippingAddress?: string;
  notes?: string;
}

// Dummy data
export const products: Product[] = [
  {
    id: "1",
    name: "Smartphone X",
    price: 799.99,
    stock: 50,
    sold: 150,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
    lowStockAlert: 10,
    supplier: "TechCorp Inc",
    lastRestocked: "2024-01-15"
  },
  {
    id: "2",
    name: "Laptop Pro",
    price: 1299.99,
    stock: 30,
    sold: 80,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    lowStockAlert: 5,
    supplier: "TechCorp Inc",
    lastRestocked: "2024-01-10"
  },
  // Add more products...
];

export const customers: Customer[] = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    points: 1500,
    tier: "gold",
    totalSpent: 4500,
    joinDate: "2023-01-15",
    lastPurchase: "2024-01-20",
    preferences: ["Electronics", "Books"],
    referralCode: "OLIVIA2023"
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    points: 500,
    tier: "silver",
    totalSpent: 2000,
    joinDate: "2023-03-20",
    lastPurchase: "2024-01-15",
    preferences: ["Sports", "Electronics"],
    referralCode: "JACKSON2023"
  },
  // Add more customers...
];

export const transactions: Transaction[] = [
  {
    id: "1",
    customerId: "1",
    products: [
      { productId: "1", quantity: 1, price: 799.99 }
    ],
    total: 799.99,
    date: "2024-01-15",
    pointsEarned: 80,
    status: "completed",
    paymentMethod: "credit_card",
    shippingAddress: "123 Main St, City, Country"
  },
  // Add more transactions...
];

// Loyalty tiers configuration
export const loyaltyTiers = {
  bronze: { 
    minSpent: 0, 
    pointsMultiplier: 1,
    benefits: ["Basic support", "Birthday reward"]
  },
  silver: { 
    minSpent: 1000, 
    pointsMultiplier: 1.2,
    benefits: ["Priority support", "Birthday reward", "5% discount"]
  },
  gold: { 
    minSpent: 3000, 
    pointsMultiplier: 1.5,
    benefits: ["24/7 support", "Birthday reward", "10% discount", "Free shipping"]
  },
  platinum: { 
    minSpent: 5000, 
    pointsMultiplier: 2,
    benefits: ["Dedicated support", "Birthday reward", "15% discount", "Free shipping", "Early access"]
  }
};

// Local storage keys
export const STORAGE_KEYS = {
  OFFLINE_TRANSACTIONS: 'offline_transactions',
  PRODUCTS: 'products',
  CUSTOMERS: 'customers'
};