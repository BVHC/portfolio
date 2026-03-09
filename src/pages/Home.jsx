// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail, FiUser, FiCode, FiLayers } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="max-w-4xl animate-fade-in pb-12">

      {/* 1. Hero Section */}
      <section className="mb-20">
        <h1 className="text-[3.5rem] leading-[1.1] font-bold text-dark mb-4 tracking-tight">
          Bui Van Hien<br />
          <span className="text-gray-600 font-medium text-[2.5rem] md:text-[3rem] leading-tight block mt-2">
            Crafting <span className="text-primary-600 font-bold">Digital Excellence</span> through Code.
          </span>
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
          I am an Information Technology student at PTIT, highly passionate about creating seamless web experiences. With a solid foundation in modern technologies like React, Tailwind CSS, and Java Spring Boot, I am actively seeking a Frontend Developer Internship to apply my skills to real-world products and continuously learn from experienced engineers.
        </p>

        <div className="flex items-center gap-4">
          <Link
            to="/projects"
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm shadow-primary-500/30"
          >
            View My Projects <FiArrowRight />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FiMail /> Let's Connect
          </Link>
        </div>
      </section>

      {/* 2. Quick Access */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-primary-600 rounded-full"></div>
          <h2 className="text-xl font-bold text-dark">Quick Access</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Link to="/about" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiUser size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">About Me</h3>
            <p className="text-sm text-gray-500 flex-1">Get to know my educational background, career objectives, and what drives my passion...</p>
          </Link>

          <Link to="/skills" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiCode size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">Technical Skills</h3>
            <p className="text-sm text-gray-500 flex-1">A look at my stack: ReactJS, Tailwind CSS, JavaScript (ES6+), and Java Spring Boot backend...</p>
          </Link>

          <Link to="/projects" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiLayers size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">Recent Projects</h3>
            <p className="text-sm text-gray-500 flex-1">Explore my work including a Pet Shop E-commerce and a Learning Materials System...</p>
          </Link>

        </div>

        <div className="mt-8 text-right">
          <Link to="/about" className="inline-flex items-center gap-1 text-sm font-bold text-dark hover:text-primary-600 transition-colors">
            Explore About Me <FiArrowRight />
          </Link>
        </div>
      </section>

    </div>
  );
}