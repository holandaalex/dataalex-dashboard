import React from 'react';
import { BarChart3, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-blue-500" />
            <span className="font-semibold text-lg text-gray-900 dark:text-white">DataAlex</span>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;