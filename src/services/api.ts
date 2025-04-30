import { DashboardData, FilterOptions } from '../types';
import { generateMockDashboardData } from './mockData';

// Simulated API delay
const SIMULATED_DELAY = 800;

/**
 * Fetch dashboard data based on filters
 * In a real application, this would call an actual API endpoint
 */
export const fetchDashboardData = async (filters: FilterOptions): Promise<DashboardData> => {
  // Simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = generateMockDashboardData(filters);
      resolve(data);
    }, SIMULATED_DELAY);
  });
};