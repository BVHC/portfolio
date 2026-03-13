
import { Link } from 'react-router-dom';
import { FiSearch, FiMoon, FiSun, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import useDarkMode from '../lib/useDarkMode';

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB'));
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-[72px] flex items-center justify-between px-10 border-b border-gray-100 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-40 transition-colors duration-300">
      <div className="flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
        <a href="#" className="flex items-center gap-1 hover:text-dark dark:hover:text-white transition">
          LinkedIn <FiArrowUpRight className="text-gray-400 dark:text-gray-500" size={14}/>
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-dark dark:hover:text-white transition">
          Resume <FiArrowUpRight className="text-gray-400 dark:text-gray-500" size={14}/>
        </a>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center bg-gray-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 text-sm text-gray-400 dark:text-gray-500 w-64 transition-colors">
          <FiSearch className="mr-2" size={14} />
          <span className="flex-1 text-[13px]">Search sections...</span>
          <kbd className="bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded shadow-sm border border-gray-200 dark:border-slate-600 text-[10px] font-mono dark:text-gray-300">⌘K</kbd>
        </div>

        <div className="flex items-center gap-2 text-[12px] font-mono bg-green-50/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full border border-green-100/50 dark:border-green-800/30 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          {time}
        </div>

        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
          <button onClick={toggleDark} className="hover:text-dark dark:hover:text-white transition hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full p-1.5 flex justify-center items-center" title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button className="hover:text-dark dark:hover:text-white transition hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full p-1.5 flex justify-center items-center">
            <a href="https://github.com/BVHC" target='_blank'><FiGithub size={16} /></a>
          </button>
        </div>
      </div>
    </header>
  );
}