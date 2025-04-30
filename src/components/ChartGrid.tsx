import React from 'react';
import { 
  BarChart, 
  PieChart, 
  LineChart, 
  RadialChart 
} from './charts';
import { RevenueData, UsersData, CategoriesData, PerformanceData } from '../types';

interface ChartGridProps {
  revenueData: RevenueData;
  usersData: UsersData;
  categoriesData: CategoriesData;
  performanceData: PerformanceData;
}

const ChartGrid: React.FC<ChartGridProps> = ({ 
  revenueData, 
  usersData, 
  categoriesData, 
  performanceData 
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Revenue Trend">
        <BarChart data={revenueData} />
      </ChartCard>
      
      <ChartCard title="User Growth">
        <LineChart data={usersData} />
      </ChartCard>
      
      <ChartCard title="Sales by Category">
        <PieChart data={categoriesData} />
      </ChartCard>
      
      <ChartCard title="Performance Metrics">
        <RadialChart data={performanceData} />
      </ChartCard>
    </div>
  );
};

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <div className="h-64">
        {children}
      </div>
    </div>
  );
};

export default ChartGrid;