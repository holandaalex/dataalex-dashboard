import React from 'react';
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, BarChart2 } from 'lucide-react';
import { DashboardStats } from '../types';
import { formatCurrency, formatNumber, calculateGrowth } from '../utils/formatters';

interface StatsCardsProps {
  data: DashboardStats;
}

const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="Receita Total"
        value={formatCurrency(data.totalRevenue)}
        change={data.revenueChange}
        icon={<DollarSign className="h-6 w-6 text-blue-500" />}
      />
      
      <StatCard 
        title="Total de Pedidos"
        value={formatNumber(data.totalOrders)}
        change={data.ordersChange}
        icon={<ShoppingCart className="h-6 w-6 text-purple-500" />}
      />
      
      <StatCard 
        title="Usuários Ativos"
        value={formatNumber(data.activeUsers)}
        change={data.usersChange}
        icon={<Users className="h-6 w-6 text-green-500" />}
      />
      
      <StatCard 
        title="Taxa de Conversão"
        value={`${data.conversionRate}%`}
        change={data.conversionChange}
        icon={<BarChart2 className="h-6 w-6 text-orange-500" />}
      />
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  const isPositive = change >= 0;
  const changeText = `${isPositive ? '+' : ''}${change}%`;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</span>
        {icon}
      </div>
      
      <div className="mt-2">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</h3>
        
        <div className="flex items-center mt-1">
          {isPositive ? (
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
          )}
          
          <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {changeText} <span className="text-gray-500 dark:text-gray-400">vs período anterior</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCards