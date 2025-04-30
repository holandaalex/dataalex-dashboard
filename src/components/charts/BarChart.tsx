import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { RevenueData } from '../../types';
import { useTheme } from '../../context/ThemeContext';

Chart.register(...registerables);

interface BarChartProps {
  data: RevenueData;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const { isDarkMode } = useTheme();

  // Colors based on theme
  const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
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
          type: 'bar',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Revenue',
              data: data.values,
              backgroundColor: 'rgba(59, 130, 246, 0.7)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1,
              borderRadius: 4,
              barThickness: 'flex',
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                callbacks: {
                  label: function(context) {
                    return `Revenue: $${context.raw.toLocaleString()}`;
                  }
                }
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: textColor
                }
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: gridColor
                },
                ticks: {
                  color: textColor,
                  callback: function(value) {
                    return '$' + value.toLocaleString();
                  }
                }
              }
            },
            animation: {
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

export default BarChart;