// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail, FiUser, FiCode, FiLayers } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="max-w-4xl animate-fade-in pb-12">
      
      {/* 1. Phần Giới thiệu (Hero Section) */}
      <section className="mb-20">
        <h1 className="text-[3.5rem] leading-[1.1] font-bold text-dark mb-4 tracking-tight">
          BVH<br /> {/* Bạn có thể đổi thành tên thật của bạn */}
          <span className="text-gray-600 font-medium">Crafting <span className="text-primary-600 font-semibold">Digital Excellence</span> through Code & Design.</span>
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
          I am a dedicated Frontend Engineer specializing in scalable, high-performance application development. I enjoy orchestrating pixel-perfect web solutions using modern technologies like React, Tailwind, and Node.js. My focus lies in bridging the gap between design and engineering.
        </p>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/projects" 
            className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm shadow-primary-500/30"
          >
            View My Work <FiArrowRight />
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-dark border border-gray-200 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FiMail /> Let's Connect
          </Link>
        </div>
      </section>

      {/* 2. Phần Truy cập nhanh (Quick Access) */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-5 bg-primary-600 rounded-full"></div>
          <h2 className="text-xl font-bold text-dark">Quick Access</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: About */}
          <Link to="/about" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiUser size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">About Me</h3>
            <p className="text-sm text-gray-500 flex-1">Get to know my journey, philosophy, and what drives my passion for...</p>
          </Link>

          {/* Card 2: Skills */}
          <Link to="/#skills" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiCode size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">Technical Skills</h3>
            <p className="text-sm text-gray-500 flex-1">A comprehensive look at my tech stack: JavaScript, React, Node.js, an...</p>
          </Link>

          {/* Card 3: Projects */}
          <Link to="/projects" className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col h-full">
            <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform">
              <FiLayers size={20} />
            </div>
            <h3 className="font-bold text-dark mb-2">Recent Projects</h3>
            <p className="text-sm text-gray-500 flex-1">Explore case studies of high-impact applications and open source...</p>
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