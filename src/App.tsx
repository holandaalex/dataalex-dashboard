import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="container px-4 py-6 mx-auto max-w-7xl">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;