import React, { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import ChartGrid from './ChartGrid';
import StatsCards from './StatsCards';
import LoadingState from './LoadingState';
import { fetchDashboardData } from '../services/api';
import { DashboardData, FilterOptions } from '../types';

const Dashboard: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    period: 'monthly',
    year: 2024,
    category: 'all'
  });

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const dashboardData = await fetchDashboardData(filters);
        setData(dashboardData);
      } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [filters]);

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (isLoading && !data) {
    return <LoadingState />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Painel de Controle</h1>
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      
      {data && (
        <>
          <StatsCards data={data.stats} />
          <ChartGrid 
            revenueData={data.revenue} 
            usersData={data.users}
            categoriesData={data.categories}
            performanceData={data.performance}
          />
        </>
      )}
    </div>
  );
};

export default Dashboard