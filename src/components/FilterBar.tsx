import React from 'react';
import { FilterX, Calendar, Download } from 'lucide-react';
import { FilterOptions } from '../types';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: Partial<FilterOptions>) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  const periods = [
    { value: 'daily', label: 'Diário' },
    { value: 'weekly', label: 'Semanal' },
    { value: 'monthly', label: 'Mensal' },
    { value: 'quarterly', label: 'Trimestral' },
    { value: 'yearly', label: 'Anual' }
  ];

  const years = [2022, 2023, 2024];
  
  const categories = [
    { value: 'all', label: 'Todas Categorias' },
    { value: 'technology', label: 'Tecnologia' },
    { value: 'clothing', label: 'Vestuário' },
    { value: 'food', label: 'Alimentos & Bebidas' },
    { value: 'furniture', label: 'Móveis' }
  ];

  const handleExportData = () => {
    alert('Exportando dados...');
    // Implementação da exportação de dados seria feita aqui
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
      <div className="flex items-center">
        <select 
          value={filters.period}
          onChange={(e) => onFilterChange({ period: e.target.value as FilterOptions['period'] })}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {periods.map(period => (
            <option key={period.value} value={period.value}>
              {period.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <select 
          value={filters.year}
          onChange={(e) => onFilterChange({ year: Number(e.target.value) })}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      
      <div className="flex items-center">
        <select 
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-md py-1 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      
      <button 
        onClick={() => onFilterChange({ period: 'monthly', year: 2024, category: 'all' })}
        className="inline-flex items-center px-2 py-1 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
        title="Resetar filtros"
      >
        <FilterX className="h-4 w-4 mr-1" />
        <span>Resetar</span>
      </button>
      
      <button 
        onClick={handleExportData}
        className="inline-flex items-center px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors ml-auto"
      >
        <Download className="h-4 w-4 mr-1" />
        <span>Exportar</span>
      </button>
    </div>
  );
};

export default FilterBar