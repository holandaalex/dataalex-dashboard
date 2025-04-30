import { DashboardData, FilterOptions } from '../types';

/**
 * Generate mock dashboard data based on filter options
 */
export const generateMockDashboardData = (filters: FilterOptions): DashboardData => {
  // Generate different data based on period and year
  let revenueLabels: string[] = [];
  let revenueValues: number[] = [];
  
  // Generate labels based on period
  switch (filters.period) {
    case 'daily':
      revenueLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      break;
    case 'weekly':
      revenueLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      break;
    case 'monthly':
      revenueLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      break;
    case 'quarterly':
      revenueLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
      break;
    case 'yearly':
      revenueLabels = ['2020', '2021', '2022', '2023', '2024'];
      break;
  }
  
  // Generate random revenue values with some variation based on year and category
  const yearMultiplier = filters.year === 2024 ? 1.2 : filters.year === 2023 ? 1.0 : 0.8;
  const categoryMultiplier = filters.category === 'technology' ? 1.3 : 
                            filters.category === 'clothing' ? 1.1 :
                            filters.category === 'food' ? 0.9 :
                            filters.category === 'furniture' ? 1.0 : 1.1;
  
  revenueValues = revenueLabels.map(() => 
    Math.floor(Math.random() * 50000 + 20000) * yearMultiplier * categoryMultiplier
  );
  
  // Generate user data
  const newUsers = revenueLabels.map(() => Math.floor(Math.random() * 1000 + 300));
  const activeUsers = revenueLabels.map((_, i) => 
    Math.floor(newUsers[i] * (1 + Math.random() * 0.8))
  );
  
  // Generate category data
  const categoryLabels = ['Technology', 'Clothing', 'Food & Beverages', 'Furniture', 'Other'];
  const categoryValues = categoryLabels.map(() => Math.floor(Math.random() * 50000 + 10000));
  
  // Performance metrics
  const performanceLabels = ['Sales', 'Marketing', 'Support', 'Development', 'Operations'];
  const currentPerformance = performanceLabels.map(() => Math.floor(Math.random() * 80 + 20));
  const previousPerformance = currentPerformance.map(val => 
    Math.max(10, val - Math.floor(Math.random() * 30 - 10))
  );
  
  // Stats with realistic change percentages
  const revenueChange = Math.floor(Math.random() * 30 - 10);
  const ordersChange = Math.floor(Math.random() * 25 - 5);
  const usersChange = Math.floor(Math.random() * 40 - 5);
  const conversionChange = Math.floor(Math.random() * 15 - 5);
  
  return {
    stats: {
      totalRevenue: revenueValues.reduce((a, b) => a + b, 0),
      revenueChange: revenueChange,
      totalOrders: Math.floor(Math.random() * 10000 + 5000),
      ordersChange: ordersChange,
      activeUsers: Math.floor(Math.random() * 50000 + 20000),
      usersChange: usersChange,
      conversionRate: Math.floor(Math.random() * 15 + 5),
      conversionChange: conversionChange
    },
    revenue: {
      labels: revenueLabels,
      values: revenueValues
    },
    users: {
      labels: revenueLabels,
      newUsers: newUsers,
      activeUsers: activeUsers
    },
    categories: {
      labels: categoryLabels,
      values: categoryValues
    },
    performance: {
      labels: performanceLabels,
      current: currentPerformance,
      previous: previousPerformance
    }
  };
};