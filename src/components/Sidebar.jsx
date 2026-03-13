import { FiTerminal, FiGrid, FiHome, FiMail, FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  const menuItems = [
    { path: '/', label: 'Home', icon: <FiHome /> },
    { path: '/about', label: 'About', icon: <FiUser /> },
    { path: '/projects', label: 'Projects', icon: <FiGrid /> },
    { path: '/contact', label: 'Contact', icon: <FiMail /> },
  ];

  return (
    <>
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-slate-900 border-r border-gray-100 dark:border-slate-800 flex flex-col z-50 transition-colors duration-300">
        <div className="px-8 py-8 mb-4">
          <NavLink to={'/'}><h2 className="text-lg font-bold text-dark dark:text-white flex items-center gap-2">
            <FiTerminal className="text-primary-500 stroke-[3]" />
             BVH
          </h2></NavLink>
        </div>

        <nav className="flex-1 flex flex-col">
          <p className="px-8 text-xs font-bold text-gray-900 dark:text-gray-300 mb-4 tracking-wide">Sections</p>

          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `px-8 py-2.5 text-sm transition-all duration-200 border-l-2 
                ${isActive
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-900/20 font-medium'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}