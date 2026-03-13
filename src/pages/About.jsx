import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiCode, FiAward } from 'react-icons/fi';

export default function About() {
  return (
    <div className="max-w-4xl animate-fade-in pb-20">
      
      {/* HERO SECTION */}
      <section className="mb-20">
        <h1 className="text-[3rem] font-bold text-dark dark:text-white mb-6 tracking-tight">
          About Me
        </h1>
        <div className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
          <p>
            Hello! I'm <strong className="text-dark dark:text-white">Bui Van Hien</strong>, an Information Technology student at Posts and Telecommunications Institute of Technology (PTIT).
          </p>
          <p>
            I am currently seeking a <strong className="text-primary-600 dark:text-primary-400 font-semibold">Frontend Developer Internship</strong> to apply my solid knowledge of ReactJS to real-world products. I'm eager to learn from experienced engineers and contribute to creating seamless user experiences, with a long-term goal of becoming a Full-stack Developer.
          </p>
        </div>
      </section>

      {/*  2. TIMELINE SECTION  */}
      <section className="mb-24" id="experience">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-dark dark:text-white">Journey & Education</h2>
        </div>

        <div className="space-y-10 border-l-2 border-gray-100 dark:border-slate-700 ml-3 pl-8 relative">
          
          {/* Mốc 1: Học vấn PTIT */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-primary-500 shadow-sm group-hover:scale-125 transition-transform"></span>
            
            <span className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1 block tracking-wider uppercase">Present</span>
            <h3 className="text-xl font-bold text-dark dark:text-white">Posts and Telecommunications Institute of Technology (PTIT)</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
              <FiBookOpen /> Major: Information Technology
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Building a strong foundation in computer science, software engineering, and modern web technologies.
            </p>
          </div>

          {/* Mốc 2: Dự án Pet Shop */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-gray-300 dark:bg-slate-600 group-hover:bg-primary-400 group-hover:scale-125 transition-all"></span>
            
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 block tracking-wider uppercase">04/2025 - 06/2025</span>
            <h3 className="text-xl font-bold text-dark dark:text-white">Full-stack Developer (Personal Project)</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
              <FiAward /> Pet Shop E-commerce
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Developed a fully responsive e-commerce platform using React 18, Redux Toolkit, and Java Spring Boot. Designed an Admin Dashboard with Ant Design to manage products and visualize revenue.
            </p>
          </div>

          {/* Mốc 3: Dự án LMS */}
          <div className="relative group">
            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-gray-300 dark:bg-slate-600 group-hover:bg-primary-400 group-hover:scale-125 transition-all"></span>
            
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-1 block tracking-wider uppercase">03/2025 - 05/2025</span>
            <h3 className="text-xl font-bold text-dark dark:text-white">Front-End Developer (Team of 4)</h3>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
              <FiAward /> Learning Materials System
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Architected the frontend for an educational document distribution system. Implemented complex modal-based authentication UI and managed states globally utilizing Redux.
            </p>
          </div>

        </div>
      </section>

      {/*  SKILLS SECTION  */}
      <section id="skills" className="scroll-mt-32">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-primary-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-dark dark:text-white">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Box Frontend */}
          <div className="p-8 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                <FiCode size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark dark:text-white">Frontend Development</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['HTML5/CSS3', 'SCSS/SASS', 'JavaScript (ES6+)', 'ReactJS', 'Tailwind CSS', 'Ant Design'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Box Backend & Tools */}
          <div className="p-8 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                <FiBookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold text-dark dark:text-white">Backend & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {['Java Spring Boot', 'MySQL', 'Git/GitHub', 'Docker', 'Postman'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-200 dark:hover:border-primary-700 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/*  Điều hướng cuối trang  */}
      <div className="mt-24 pt-10 border-t border-gray-100 dark:border-slate-800 flex justify-end items-center">
        <Link to="/contact" className="group flex flex-col items-end gap-1">
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">Next <FiArrowRight /></span>
          <span className="font-bold text-dark dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">Contact Me</span>
        </Link>
      </div>

    </div>
  );
}