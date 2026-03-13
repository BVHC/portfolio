import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { projects } from '../content/profile';

export default function Projects() {

  const [activeFilter, setActiveFilter] = useState('All');
  const filterCategories = ['All', 'React', 'Redux', 'SASS/SCSS', 'Tailwind CSS', 'Ant Design', 'Spring Boot', 'Docker', 'MySQL', 'Elasticsearch', 'Vite'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(activeFilter));


  return (
    <div className="max-w-5xl animate-fade-in pb-12">
      <h1 className="text-[3rem] font-bold text-dark dark:text-white mb-4 tracking-tight">Selected Works</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
        A collection of digital solutions and creative experiments crafting the future of web experiences.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="flex items-center bg-white dark:bg-slate-800 px-4 py-2 5 rounded-xl boder border-gray-300 dark:border-slate-700 text-sm w-full md:w-72 shadow-sm">
          <FiSearch className="text-gray-400 dark:text-gray-500 mr-2" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            className="bg-transparent border-none outline-none text-dark dark:text-white w-full placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filterCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="group bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-100 dark:hover:border-primary-800 transition-all duration-500 flex flex-col">
            <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 dark:bg-slate-700 border-b border-gray-100 dark:border-slate-700">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <Link
                to={`/projects/${project.slug}`} 
                className="text-lg font-bold text-dark dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              >
                {project.title}
              </Link>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                {project.summary}
              </p>


              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-auto w-fit"
              >
                Explore Case Study <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-dark dark:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors text-sm shadow-sm">
          Load More Projects ▾
        </button>
      </div>

    </div>
  );
}