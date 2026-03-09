
import { Link } from 'react-router-dom';
import { FiSearch, FiMoon, FiGithub, FiMusic, FiArrowUpRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB'));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB'));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-[72px] flex items-center justify-between px-10 border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
        <a href="#" className="flex items-center gap-1 hover:text-dark transition">
          LinkedIn <FiArrowUpRight className="text-gray-400" size={14}/>
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-dark transition">
          Resume <FiArrowUpRight className="text-gray-400" size={14}/>
        </a>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-400 w-64">
          <FiSearch className="mr-2" size={14} />
          <span className="flex-1 text-[13px]">Search sections...</span>
          <kbd className="bg-white px-1.5 py-0.5 rounded shadow-sm border border-gray-200 text-[10px] font-mono">⌘K</kbd>
        </div>

        <div className="flex items-center gap-2 text-[12px] font-mono bg-green-50/50 text-green-700 px-3 py-1.5 rounded-full border border-green-100/50">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          {time}
        </div>

        <div className="flex items-center gap-4 text-gray-500">
          <button className="hover:text-dark transition hover:bg-slate-400 rounded-full p-1 flex justify-center items-center"><FiMoon size={16} /></button>
          <button className="hover:text-dark transition  hover:bg-slate-400 rounded-full p-1 flex justify-center items-center"><a href="https://github.com/BVHC" target='_blank'><FiGithub size={16} /></a></button>
        </div>
      </div>
    </header>
  );
}