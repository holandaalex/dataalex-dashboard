import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { PerformanceData } from '../../types';
import { useTheme } from '../../context/ThemeContext';

Chart.register(...registerables);

interface RadialChartProps {
  data: PerformanceData;
}

const RadialChart: React.FC<RadialChartProps> = ({ data }) => {
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
          type: 'radar',
          data: {
            labels: data.labels,
            datasets: [{
              label: 'Current Period',
              data: data.current,
              backgroundColor: 'rgba(59, 130, 246, 0.3)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(59, 130, 246, 1)',
              pointRadius: 4
            }, {
              label: 'Previous Period',
              data: data.previous,
              backgroundColor: 'rgba(156, 163, 175, 0.3)',
              borderColor: 'rgba(156, 163, 175, 1)',
              borderWidth: 2,
              pointBackgroundColor: 'rgba(156, 163, 175, 1)',
              pointRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              r: {
                beginAtZero: true,
                grid: {
                  color: gridColor
                },
                angleLines: {
                  color: gridColor
                },
                pointLabels: {
                  color: textColor,
                  font: {
                    size: 11
                  }
                },
                ticks: {
                  backdropColor: 'transparent',
                  color: textColor
                }
              }
            },
            plugins: {
              legend: {
                position: 'top',
                labels: {
                  color: textColor,
                  usePointStyle: true
                }
              },
              tooltip: {
                mode: 'index',
                intersect: false,
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

export default RadialChart;