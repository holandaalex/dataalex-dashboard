export interface FilterOptions {
  period: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  year: number;
  category: string;
}

export interface RevenueData {
  labels: string[];
  values: number[];
}

export interface UsersData {
  labels: string[];
  newUsers: number[];
  activeUsers: number[];
}

export interface CategoriesData {
  labels: string[];
  values: number[];
}

export interface PerformanceData {
  labels: string[];
  current: number[];
  previous: number[];
}

export interface DashboardStats {
  totalRevenue: number;
  revenueChange: number;
  totalOrders: number;
  ordersChange: number;
  activeUsers: number;
  usersChange: number;
  conversionRate: number;
  conversionChange: number;
}

export interface DashboardData {
  stats: DashboardStats;
  revenue: RevenueData;
  users: UsersData;
  categories: CategoriesData;
  performance: PerformanceData;
}