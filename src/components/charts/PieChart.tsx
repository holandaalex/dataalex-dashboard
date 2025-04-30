import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { CategoriesData } from '../../types';
import { useTheme } from '../../context/ThemeContext';

Chart.register(...registerables);

interface PieChartProps {
  data: CategoriesData;
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const { isDarkMode } = useTheme();

  // Text color based on theme
  const textColor = isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)';

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      
      if (ctx) {
        // Destroy previous chart instance if it exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        // Create new chart
        chartInstance.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: data.labels,
            datasets: [{
              data: data.values,
              backgroundColor: [
                'rgba(59, 130, 246, 0.8)', // Blue
                'rgba(139, 92, 246, 0.8)',  // Purple
                'rgba(16, 185, 129, 0.8)',  // Green
                'rgba(245, 158, 11, 0.8)',  // Yellow
                'rgba(239, 68, 68, 0.8)'    // Red
              ],
              borderColor: isDarkMode ? 'rgba(30, 41, 59, 1)' : 'white',
              borderWidth: 2,
              hoverOffset: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right',
                labels: {
                  color: textColor,
                  usePointStyle: true,
                  padding: 15,
                  font: {
                    size: 11
                  }
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const label = context.label || '';
                    const value = context.raw as number;
                    const total = context.chart.data.datasets[0].data.reduce(
                      (a: number, b: number) => a + b, 0
                    );
                    const percentage = Math.round((value / total) * 100);
                    return `${label}: ${percentage}% ($${value.toLocaleString()})`;
                  }
                }
              }
            },
            cutout: '65%',
            animation: {
              animateScale: true,
              animateRotate: true,
              duration: 1000,
              easing: 'easeOutQuart'
            }
          }
        });
      }
    }
    
    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, isDarkMode]);

  return <canvas ref={chartRef} />;
};

export default PieChart;