import { FiActivity, FiArrowUpRight, FiGrid, FiHome, FiMail, FiUser } from "react-icons/fi";
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
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-50">
        <div className="px-8 py-8 mb-4">
          <NavLink to={'/'}><h2 className="text-lg font-bold text-dark flex items-center gap-2">
            <FiArrowUpRight className="text-primary-500 stroke-[3]" />
             BVH.dev
          </h2></NavLink>
        </div>

        <nav className="flex-1 flex flex-col">
          <p className="px-8 text-xs font-bold text-gray-900 mb-4 tracking-wide">Sections</p>

          {menuItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `px-8 py-2.5 text-sm transition-all duration-200 border-l-2 
                ${isActive
                  ? 'border-primary-500 text-primary-600 bg-primary-50/50 font-medium'
                  : 'border-transparent text-gray-500 hover:text-dark hover:bg-gray-50'
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